import { useEffect } from 'react';

export const useSliderAutoScroll = (handle: () => void, timer: number) => {
  useEffect(() => {
    let interval = setInterval(() => handle(), timer);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
};
