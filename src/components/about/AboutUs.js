import Image from "next/image";

const AboutUs = () => {
    return (
        <section id="about">
        <div className="container">
           <div className="py-24 md:py-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Image className="w-full  h-[231px] md:h-[438px]" src='/assets/images/about/about.webp' alt="" width={546} height={438} />
              </div>
              <div>
                <h5 className="font-Montserrat font-semibold text-xs md:text-base text-p_text mb-[6px]">We are Exotic Food</h5>
                <h3 className="font-Playfair font-black text-xl md:text-5xl text-text_color">The Best Trusted</h3>
                <h3 className="font-Playfair text-xl md:text-5xl text-[#699C47] mb-4 md:mb-6">Farms In the World</h3>
                <p className="font-Montserrat font-medium text-xs md:text-base text-p_text mb-4 md:mb-6">Who aspire to be good, do good, and spread goodness. We democratic, self-sustaining,
                   two-sided marketplace which thrives on trust and is 
                  built on community and quality content. ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex items-center gap-20 md:gap-8">
                    <Image className="w-20 md:w-[111px] h-[86px] md:h-[120px]" src="/assets/images/about/organic.webp" alt="" width={111} height={120} />
                    <Image className="w-[124px] md:w-[173px] h-[86px] md:h-[120px]" src='/assets/images/about/natural.webp' alt="" width={173} height={120} />
                  </div>
              </div>
              
             </div>
            
           </div>
          
        </div>
        
      </section>
    );
};

export default AboutUs;