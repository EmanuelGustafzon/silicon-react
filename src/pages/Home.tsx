import useCurrentDevice from "../hooks/useCurrentDevice";
import CompanyLogos from "../components/CompanyLogos";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import SlideSection from "../sections/SlideSection";
import Testamonials from "../sections/Testimonials";
import TransferAndPaymentsFeture from "../sections/TransferAndPaymentsFeture";
import Faq from "../sections/Faq";
import Subscribe from "../sections/Subscribe";

function Home() {
    const device = useCurrentDevice()
    return (
      <>
        <Hero/>
        { device !== 'mobile' && <CompanyLogos/> }
        <Features />
        <SlideSection/>
        { device === 'desktop' && <TransferAndPaymentsFeture/> }
        { device === 'desktop' && <Testamonials/> }
        <Faq/>
        <Subscribe/>
      </>
    )
  }
  
  export default Home