import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.VUE_APP_URL, process.env.VUE_APP_MY_KEY)