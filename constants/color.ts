import { useColorScheme } from "react-native";

const LightColors = {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007AFF',
    card: '#F2F2F2',
    border: '#E0E0E0',
  };
  
  const DarkColors = {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#0A84FF',
    card: '#1C1C1E',
    border: '#3A3A3C',
  };
  
  export const Colors = {
    light: LightColors,
    dark: DarkColors,
  };
  
  export const useThemeColors = () => {
    const scheme = useColorScheme();
    return scheme === 'dark' ? Colors.dark : Colors.light;
  };