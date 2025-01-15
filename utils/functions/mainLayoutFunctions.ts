import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const mainLayoutFunctions = () => {
  const emotionCacheOptions = {
    rtl: {
      key: 'muirtl',
      stylisPlugins: [prefixer, rtlPlugin],
      insertionPoint:
        typeof document !== 'undefined' ? document.getElementById('emotion-insertion-point') : null,
    },
  };

  return { emotionCacheOptions };
};

export default mainLayoutFunctions;
