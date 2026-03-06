import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isSupabaseConfigured, getSupabaseAdmin } from '@/lib/supabase';
import { requireAuth } from '@/lib/auth';

async function authAndSupabase(request: NextRequest): Promise<NextResponse | null> {
  const auth = await requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: 'Supabase is not configured' }, { status: 503 });
  }

  return null;
}

function revalidateAll(paths: string[]) {
  for (const p of paths) revalidatePath(p);
  revalidatePath('/llms-full.txt', 'page');
}

export function createSingletonRoute(
  tableName: string,
  label: string,
  revalidatePaths: string[] = ['/'],
) {
  async function GET(request: NextRequest) {
    try {
      const blocked = await authAndSupabase(request);
      if (blocked) return blocked;

      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .limit(1)
        .single();

      if (error) throw error;

      return NextResponse.json({ success: true, data });
    } catch (err) {
      console.error(`Admin ${label} GET:`, err);
      return NextResponse.json({ error: `Failed to fetch ${label}` }, { status: 500 });
    }
  }

  async function PUT(request: NextRequest) {
    try {
      const blocked = await authAndSupabase(request);
      if (blocked) return blocked;

      const body = await request.json();
      const supabase = getSupabaseAdmin();

      const { data: existing, error: fetchErr } = await supabase
        .from(tableName)
        .select('id')
        .limit(1)
        .single();

      if (fetchErr || !existing) throw fetchErr ?? new Error(`No ${tableName} row found`);

      const { data, error } = await supabase
        .from(tableName)
        .update(body)
        .eq('id', existing.id)
        .select()
        .single();

      if (error) throw error;

      revalidateAll(revalidatePaths);
      return NextResponse.json({ success: true, data });
    } catch (err) {
      console.error(`Admin ${label} PUT:`, err);
      return NextResponse.json({ error: `Failed to update ${label}` }, { status: 500 });
    }
  }

  return { GET, PUT };
}
