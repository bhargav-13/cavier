const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];

const getEnv = () => {
  const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  let parsedSupabaseUrl;
  try {
    parsedSupabaseUrl = new URL(supabaseUrl);
  } catch (error) {
    throw new Error('SUPABASE_URL must be a valid URL');
  }

  if (!['http:', 'https:'].includes(parsedSupabaseUrl.protocol)) {
    throw new Error('SUPABASE_URL must start with http:// or https://');
  }

  if (supabaseServiceRoleKey.startsWith('your_')) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is using a placeholder value');
  }

  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT) || 3000,
    supabaseUrl,
    supabaseServiceRoleKey,
  };
};

module.exports = {
  getEnv,
};
