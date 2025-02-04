import { useEffect } from 'react';

export const useSliderAutoScroll = (handle: () => void, timer: number) => {
  useEffect(() => {
    const interval = setInterval(() => handle(), timer);

    return () => {
      clearInterval(interval);
    };
  });
};
