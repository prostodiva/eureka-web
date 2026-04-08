import Features from '../../../components/sections/Features.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import featuresHome400avif from '../../../assets/optimized/featuresHome-400.avif';
import featuresHome800avif from '../../../assets/optimized/featuresHome-800.avif';
import featuresHome1200avif from '../../../assets/optimized/featuresHome-1200.avif';
import featuresHome1600avif from '../../../assets/optimized/featuresHome-1600.avif';
import featuresHome2400avif from '../../../assets/optimized/featuresHome-2400.avif';
import featuresHome400webp from '../../../assets/optimized/featuresHome-400.webp';
import featuresHome800webp from '../../../assets/optimized/featuresHome-800.webp';
import featuresHome1200webp from '../../../assets/optimized/featuresHome-1200.webp';
import featuresHome1600webp from '../../../assets/optimized/featuresHome-1600.webp';
import featuresHome2400webp from '../../../assets/optimized/featuresHome-2400.webp';
import Button from '../../../components/ui/Button.tsx';

const featuresHome = makeResponsiveImage({
  fallbackSrc: featuresHome800webp,
  avif400: featuresHome400avif,
  avif800: featuresHome800avif,
  avif1200: featuresHome1200avif,
  avif1600: featuresHome1600avif,
  avif2400: featuresHome2400avif,
  webp400: featuresHome400webp,
  webp800: featuresHome800webp,
  webp1200: featuresHome1200webp,
  webp1600: featuresHome1600webp,
  webp2400: featuresHome2400webp,
});

function FeaturesSection() {
    const handleDemoCLick = () => console.log('demo clicked');

    return (
        <Features
            backgroundImage={featuresHome}
            content={
                <FeatureSectionContent
                    title="Interactive Learning"
                    description="Kids engage with puzzles, drag-and-drop activities, quizzes"
                    learnMoreHref="/gameplay"
                    textColor="text-[#8658F1]"
                />
            }
            actions={
                <div className="absolute left-[4vw] bottom-[30vh] flex flex-col items-start gap-[2vh]">
                    <Button variant="secondary" onClick={handleDemoCLick}
                            className="text-[clamp(0.75rem,1vw,1.25rem)] py-[1.5vh] px-[3vw]"
                    >
                        Download Free Demo
                    </Button>
                </div>
            }
        />
    );
}

export default FeaturesSection;
