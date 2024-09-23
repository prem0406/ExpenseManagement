import {useMemo} from 'react';
import {useColorScheme} from 'react-native';

export const useDarkMode = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = useMemo(() => colorScheme === 'dark', [colorScheme]);

  return {isDarkMode};
};
