import Container from './Container';
import Icon from './Icon';
import { features } from './data/features';

const TrustFeatures = () => {
  return (
    <Container>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#F0E4D8] shadow-lg overflow-hidden">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-3 p-5">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FCEEE1] text-[#E2661F] shrink-0">
              <Icon name={feature.icon} size={16} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">{feature.title}</p>
              <p className="text-xs text-[#8A8A8A]">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrustFeatures;