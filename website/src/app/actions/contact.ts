'use server'
// TODO: insert into Supabase contacts table + send via Resend
export async function submitContact(_prevState: unknown, formData: FormData) {
  // Stub: always returns success
  void formData
  return { success: true }
}
