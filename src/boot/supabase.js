import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://ptnziszqasyjheztdwfb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0bnppc3pxYXN5amhlenRkd2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MjA3MTcsImV4cCI6MjAyMDk5NjcxN30.OqjoOPygDaRMdvvDSo0x1XHz_lwftoT1izKDQ-K1Bx0'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()
  user.value = session?.user || null
})

console.log('init supabase', supabase)

export default function useSupabase () {
  return { supabase }
}
