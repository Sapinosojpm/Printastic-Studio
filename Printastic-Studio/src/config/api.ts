import { Platform } from 'react-native';

// Use different URLs for iOS and Android
const API_URL = Platform.select({
  ios: 'http://localhost:5000/api',
  android: 'http://10.0.2.2:5000/api', // Android emulator localhost
  default: 'http://localhost:5000/api',
});

export const API_CONFIG = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getAuthHeader = (token: string) => ({
  ...API_CONFIG.headers,
  Authorization: `Bearer ${token}`,
}); 