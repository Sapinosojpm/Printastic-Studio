import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#102E50',    // Deep Blue
    secondary: '#F5C45E',  // Warm Yellow
    accent: '#E78B48',     // Orange
    error: '#BE3D2A',      // Red
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#102E50',
    textLight: '#6C757D',
    success: '#28A745',
    warning: '#F5C45E',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  roundness: 12,
}; 