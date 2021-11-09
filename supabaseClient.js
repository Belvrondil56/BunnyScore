import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SUPABASE_URL, SUPABASE_PUBLIC_KEY} from "@env";

console.log('SUPABASE_URL', SUPABASE_URL);

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY,{
    localStorage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  });

export { supabase };