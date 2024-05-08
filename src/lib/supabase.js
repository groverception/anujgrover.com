import { createClient } from '@supabase/supabase-js'
import { config } from '../../config';
export const supabase = createClient(config.URL, config.MY_KEY)