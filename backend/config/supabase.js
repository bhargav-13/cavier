const { createClient } = require('@supabase/supabase-js');
const { getEnv } = require('./env');

const env = getEnv();

const supabase = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
  },
});

module.exports = supabase;
