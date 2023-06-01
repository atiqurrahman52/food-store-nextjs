import AboutBanner from "@/components/about/AboutBanner";
import AboutUs from "@/components/about/AboutUs";
import TeamMembers from "@/components/about/TeamMembers";

import Fqa from "@/components/shared/Fqa";
import Testimonial from "@/components/shared/Testimonial";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
         <title>About</title>
      </Head>
      <AboutBanner />
      <AboutUs />
      <TeamMembers />
      <Testimonial />
      <Fqa />
    </div>
  );
};

export default about;
