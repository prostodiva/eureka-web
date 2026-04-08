import Overview from '../../../components/sections/Overview.tsx';
import OverviewSectionContent from './OverviewSectionContent.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import overview400avif from '../../../assets/optimized/overviewHome-400.avif';
import overview800avif from '../../../assets/optimized/overviewHome-800.avif';
import overview1200avif from '../../../assets/optimized/overviewHome-1200.avif';
import overview1600avif from '../../../assets/optimized/overviewHome-1600.avif';
import overview2400avif from '../../../assets/optimized/overviewHome-2400.avif';
import overview400webp from '../../../assets/optimized/overviewHome-400.webp';
import overview800webp from '../../../assets/optimized/overviewHome-800.webp';
import overview1200webp from '../../../assets/optimized/overviewHome-1200.webp';
import overview1600webp from '../../../assets/optimized/overviewHome-1600.webp';
import overview2400webp from '../../../assets/optimized/overviewHome-2400.webp';

const overview = makeResponsiveImage({
  fallbackSrc: overview800webp,
  avif400: overview400avif,
  avif800: overview800avif,
  avif1200: overview1200avif,
  avif1600: overview1600avif,
  avif2400: overview2400avif,
  webp400: overview400webp,
  webp800: overview800webp,
  webp1200: overview1200webp,
  webp1600: overview1600webp,
  webp2400: overview2400webp,
});

function OverviewSection() {
  return (
    <Overview
      backgroundImage={overview}
      content={<OverviewSectionContent />}
      className="h-screen flex items-center justify-center"
    />
  );
}

export default OverviewSection;
