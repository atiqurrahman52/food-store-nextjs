import AboutBanner from "@/components/about/AboutBanner";
import AboutUs from "@/components/about/AboutUs";
import TeamMembers from "@/components/about/TeamMembers";

import Fqa from "@/components/shared/Fqa";
import Testimonial from "@/components/shared/Testimonial";

const about = () => {
  return (
    <div>
      <AboutBanner />
      <AboutUs />
      <TeamMembers />
      <Testimonial />
      <Fqa />
    </div>
  );
};

export default about;
