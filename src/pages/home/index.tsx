import { PromoSlider } from '@/shared/ui';
import { PromoSlides } from './content';

export const Home = () => {
  return (
    <>
      <PromoSlider content={PromoSlides} />
    </>
  );
};
