import FeatureTabs from "./sections/FeatureTabs";
import HeroSection from "./sections/HeroSection";
import ServicesSec from "./sections/ServicesSec";
import SustainableAgriculture from "./sections/SustainableAgriculture";

const Home = () => {
    return (
        <div className="">
            <HeroSection />
            <ServicesSec />
            <SustainableAgriculture />
            <FeatureTabs />
        </div>
    );
};

export default Home;