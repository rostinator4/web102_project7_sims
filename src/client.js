import { createClient } from '@supabase/supabase-js'

const URL = 'https://gschjdiyjcgulsazqasg.supabase.co'
const API_KEY = 'sb_publishable_EcnSyMQS7NjBKEZl4P12Tw_OjChhi13'


export const supabase = createClient(URL, API_KEY)