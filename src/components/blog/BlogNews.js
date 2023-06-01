import blogArchivesData from "@/data/blog/blogArchivesData";
import blogData from "@/data/blog/blogData";
import foodTagsData from "@/data/blog/foodTagsData";
import recentPostData from "@/data/blog/recentPostData";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
const BlogNews = () => {
  return (
    <div className="container">
      <div className="py-20">
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="relative">
            <Image
              src="/assets/images/share/leaf.png"
              alt=""
              width={190}
              height={104}
            />
          </div>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
              News From Exotic Food
            </h3>
            <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
              Made with ingredients so classic
            </h6>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogData.map(
                ({ id, img, title, calendar, date, user, userName }) => (
                  <div key={id} className="relative overflow-hidden rounded-xl">
                    <Link href={`/blog/${id}`}>
                      <Image
                        className="w-ful"
                        src={img}
                        alt=""
                        width={356}
                        height={347}
                      />

                      <div className="absolute bg-[#18271BB8] p-6 bottom-0 w-full">
                        <p className="font-Montserrat font-medium text-sm md:text-base text-white mb-4 md:mb-3">
                          {title}
                        </p>
                        <div className="flex justify-between rounded-b-lg">
                          <div className="flex space-x-2">
                            <span className="w-3 md:w-5 h-3 md:h-5">
                         
                              <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.66602 2.16602V4.66602"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.334 2.16602V4.66602"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.91602 8.07422H17.0827"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M17.5 7.58464V14.668C17.5 17.168 16.25 18.8346 13.3333 18.8346H6.66667C3.75 18.8346 2.5 17.168 2.5 14.668V7.58464C2.5 5.08464 3.75 3.41797 6.66667 3.41797H13.3333C16.25 3.41797 17.5 5.08464 17.5 7.58464Z"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.0781 11.9167H13.0856"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.0781 14.4167H13.0856"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.99607 11.9167H10.0036"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M9.99607 14.4167H10.0036"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.91209 11.9167H6.91957"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.91209 14.4167H6.91957"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">
                              {date}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <span className="w-3 md:w-5 h-3 md:h-5">
                             
                              <svg
                                width="14"
                                height="19"
                                viewBox="0 0 14 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.1242 4.5C10.1242 5.3288 9.79493 6.12366 9.20887 6.70971C8.62282 7.29576 7.82797 7.625 6.99917 7.625C6.17037 7.625 5.37551 7.29576 4.78946 6.70971C4.20341 6.12366 3.87417 5.3288 3.87417 4.5C3.87417 3.6712 4.20341 2.87634 4.78946 2.29029C5.37551 1.70424 6.17037 1.375 6.99917 1.375C7.82797 1.375 8.62282 1.70424 9.20887 2.29029C9.79493 2.87634 10.1242 3.6712 10.1242 4.5ZM0.75 16.265C0.776779 14.6253 1.44695 13.0618 2.61598 11.9117C3.78501 10.7616 5.35924 10.1171 6.99917 10.1171C8.63909 10.1171 10.2133 10.7616 11.3824 11.9117C12.5514 13.0618 13.2216 14.6253 13.2483 16.265C11.2878 17.164 9.15596 17.6279 6.99917 17.625C4.76917 17.625 2.6525 17.1383 0.75 16.265Z"
                                  stroke="white"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">
                              {userName}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </div>

            <div className="block lg:hidden">
              <div className="flex justify-between items-center mt-5">
                <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
                  <span>
                    <ArrowLeft size={16} className="text-[#838D8F]" />
                  </span>
                  <span className="font-Montserrat font-medium text-[10px] md:text-sm text-[#838D8F]">
                    Previous
                  </span>
                </button>
                <div>
                  <Link
                    className="bg-[#EDEDE3] text-primary_3 py-1 md:py-2 px-2 md:px-3 rounded-lg"
                    href="#"
                  >
                    1
                  </Link>
                  <Link
                    className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                    href="#"
                  >
                    2
                  </Link>
                  <Link
                    className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                    href="#"
                  >
                    ...
                  </Link>
                  <a
                    className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                    href="#"
                  >
                    6
                  </a>
                </div>
                <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
                  <span className="font-Montserrat font-medium text-[10px] md:text-sm text-text_color">
                    Next
                  </span>

                  <span>
                    <ArrowRight size={16} className="text-text_color" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6 md:space-y-8">
            <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
              <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
                Blog Archives
              </h3>
              <div className="space-y-4">
                {blogArchivesData.map(({ id, name }) => (
                  <h4
                    key={id}
                    className="font-Montserrat text-xs md:text-base text-p_text"
                  >
                    {name}
                  </h4>
                ))}
              </div>
            </div>

            <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
              <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
                Recent Posts
              </h3>
              <div className="space-y-5">
                {recentPostData.map(({ id, img, title, date }) => (
                  <Link href="#" key={id} className="flex items-center gap-3">
                    <div>
                      <img className="rounded-xl" src={img} alt="" />
                    </div>
                    <div>
                      <h3 className="mb-3 font-Montserrat font-medium text-sm text-text_color">
                        {title}
                      </h3>
                      <span className="font-Montserrat font-medium text-xs text-[#699C47]">
                        {date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
              <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
                Tags
              </h3>
              <div className="space-y-4 space-x-2">
                {foodTagsData.map(({ id, name }) => (
                  <button
                    key={id}
                    className="py-[6px] px-[14px] bg-white rounded-full font-Montserrat text-sm text-p_text"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-5 px-6 bg-[#F1F4E9] rounded-xl md:rounded-2xl">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-Playfair font-black text-xl text-[#699C47] mb-[9px]">
                    Green Lemon & Orange
                  </h3>
                  <button className="py-[9px] md:py-2 px-[29px] md:px-[23px] bg-[#699C47] font-Montserrat font-semibold text-sm md:text-base text-white rounded-lg md:rounded-xl">
                    Shop now
                  </button>
                </div>
                <div>
                  <img
                    className="pt-[100px] w-full h-full ml-5"
                    src="/assets/images/blog/lemon.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:block hidden">
          <div className="flex justify-between items-center mt-5">
            <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
              <span>
                <ArrowLeft size={20} className="text-[#838D8F]" />
              </span>
              <span className="font-Montserrat font-medium text-[10px] md:text-sm text-[#838D8F]">
                Previous
              </span>
            </button>
            <div>
              <a
                className="cursor-pointer bg-[#EDEDE3] text-primary_3 py-1 md:py-2 px-2 md:px-3 rounded-lg"
                href="#"
              >
                1
              </a>
              <a
                className="cursor-pointer font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                href="#"
              >
                2
              </a>
              <a
                className="cursor-pointer font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                href="#"
              >
                ...
              </a>
              <a
                className="cursor-pointer font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                href="#"
              >
                6
              </a>
            </div>
            <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
              <span className="font-Montserrat font-medium text-[10px] md:text-sm text-text_color">
                Next
              </span>

              <span>
                <ArrowRight size={20} className="text-text_color" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
