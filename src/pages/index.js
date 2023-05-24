import Banner from "@/components/home/Banner";
import DeliveryProcess from "@/components/home/DeliveryProcess";
import ExoticFood from "@/components/home/ExoticFood";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import HeroSection from "@/components/home/HeroSection";
import NewsLetter from "@/components/home/NewsLetter";
import Testimonial from "@/components/shared/Testimonial";
import TopCategories from "@/components/home/TopCategories";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Food Store </title>
      </Head>

      <div>
        <HeroSection />
        <TopCategories />
        <FeaturedProduct />
        <Banner />
        <DeliveryProcess />
        <Testimonial />
        <ExoticFood />
        <NewsLetter />
      </div>
    </>
  );
}
