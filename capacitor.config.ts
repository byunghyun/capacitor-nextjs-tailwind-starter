import type { CapacitorConfig } from '@capacitor/cli';
import 'dotenv/config';

const liveReload = process.env.CAPACITOR_LIVE_RELOAD === 'true';
const devIp = process.env.CAPACITOR_DEV_IP || '172.30.1.32';
const devPort = process.env.CAPACITOR_DEV_PORT || '3000';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: '.',
  webDir: 'out',
  ios: {
    contentInset: 'always',
  },
  ...(liveReload && {
    server: {
      url: `http://${devIp}:${devPort}`,
      cleartext: true,
    },
  }),
};

export default config;
