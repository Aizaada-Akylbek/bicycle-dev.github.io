import React from "react";
import Hero from "../components/hero/Hero";
import Slider from "../components/slider2/Slider2";
import Mission from "../components/mission/Mission";
import Team from "../components/team/Team";
import PartnersFeedback from "../components/partnersFeedback/PartnersFeedback";
import MakeBusiness from "../components/makeBusiness/MakeBusiness";
import Faq from "../components/faq/Faq";
import WorkingTogether from "../components/workingTogether/WorkingTogether";
import WorkBenefit from "../components/workBenefit/WorkBenefit";
import SliderNew from "../components/sliderNew/SliderNew";

const Company = () => {
  return (
    <div>
      <Hero />
      {/* <Slider /> */}
      {/* <Slider2/> */}
      <SliderNew/>
      <WorkBenefit/>
      <Mission />
      <Team />
      <PartnersFeedback />
      <MakeBusiness />
      <Faq />
      <WorkingTogether />
    </div>
  );
};

export default Company;
