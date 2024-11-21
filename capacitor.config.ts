import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capasitor',
  webDir: 'out',
  "server": {
  "url": "http://10.111.0.239:3000",
  "cleartext": true
},
};

export default config;
