'use client';

import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import theme from '@/utils/theme/MuiTheme';
import { store } from '@/store/store';
import { CacheProvider } from '@emotion/react';
import createCache, { Options } from '@emotion/cache';
import mainLayoutFunctions from '@/utils/functions/mainLayoutFunctions';
import { MainLayoutProps } from '@/types/components/mainLayout';

const MainLayout = ({ children }: MainLayoutProps) => {
  const { emotionCacheOptions } = mainLayoutFunctions();

  return (
    <CacheProvider value={createCache(emotionCacheOptions.rtl as Options)}>
      <ThemeProvider theme={createTheme(theme)}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
