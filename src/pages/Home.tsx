import HomeHero from '@/src/components/home/HomeHero';
import BrandIntro from '@/src/components/home/BrandIntro';
import StoryPreview from '@/src/components/home/StoryPreview';
import ProductPreview from '@/src/components/home/ProductPreview';
import SizesPreview from '@/src/components/home/SizesPreview';
import MaterialsPreview from '@/src/components/home/MaterialsPreview';
import FuturePreview from '@/src/components/home/FuturePreview';
import BackProjectCTA from '@/src/components/home/BackProjectCTA';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <BrandIntro />
      <StoryPreview />
      <ProductPreview />
      <SizesPreview />
      <MaterialsPreview />
      <FuturePreview />
      <BackProjectCTA />
    </main>
  );
}
