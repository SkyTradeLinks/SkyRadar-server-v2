const {
  PORT,
  NODE_ENV,
  FRONTEND_API_KEY,
  FRONTEND_DOMAIN,
  FRONTEND_URI,
  DATABASE_URL,
} = process.env;

export default () => ({
  PORT: PORT ? Number(PORT) : 8888,
  FRONTEND_API_KEY,
  FRONTEND_DOMAIN,
  FRONTEND_URI,
  WEB3_HEADER: { t: 'sip99' },
  WEB3_NETWORK: 'solana',
  NODE_ENV,
  DATABASE_URL,
});
