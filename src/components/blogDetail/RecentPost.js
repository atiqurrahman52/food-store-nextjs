import recentPostData from "@/data/blog/recentPostData";
import Link from "next/link";


const RecentPost = () => {
  return (
    <div className="col-span-12 lg:col-span-4 space-y-6 md:space-y-8">
      <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
        <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
          Blog Archives
        </h3>
        <div className="space-y-4">
          <h4 className="font-Montserrat text-xs md:text-base text-p_text">
            March 2023(1)
          </h4>
          <h4 className="font-Montserrat text-xs md:text-base text-p_text">
            December 2023 (3)
          </h4>
          <h4 className="font-Montserrat text-xs md:text-base text-p_text">
            November 2023 (7)
          </h4>
          <h4 className="font-Montserrat text-xs md:text-base text-p_text">
            August 2022 (3)
          </h4>
        </div>
      </div>

      <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
        <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
          Recent Posts
        </h3>
        <div className="space-y-5">
         
          {/* {recentPostData.map((id, img, title, date) => ( */}
          {/* {recentPostData.map((id,item) => (
            <div key={id} className="flex items-center gap-3">
              <div>
                <Link href="#">
                  {" "}
                  <img
                    className="rounded-xl"
                    src={item.img}
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <h3 className="mb-3 font-Montserrat font-medium text-sm text-text_color">
                    {item.title}
                </h3>
                <span className="font-Montserrat font-medium text-xs text-[#699C47]">
                  {item.date}
                </span>
              </div>
            </div>
          ))} */}

           <Link href="#" className="flex items-center gap-3">
            <div>
              <img className="rounded-xl" src="/assets/images/blog/post-1.webp" alt="" />
            </div>
            <div>
              <h3 className="mb-3 font-Montserrat font-medium text-sm text-text_color">
                vegan and meet all <br />
                your needs?
              </h3>
              <span className="font-Montserrat font-medium text-xs text-[#699C47]">
                March 02.2022
              </span>
            </div>
          </Link>

          <Link href="#" className="flex items-center gap-3">
            <div>
              <img className="rounded-xl" src="/assets/images/blog/post-2.webp" alt="" />
            </div>
            <div>
              <h3 className="mb-3 font-Montserrat font-medium text-sm text-text_color">
                vegan and meet all <br />
                your needs?
              </h3>
              <span className="font-Montserrat font-medium text-xs text-[#699C47]">
                March 02.2022
              </span>
            </div>
          </Link>
          <Link href="#" className="flex items-center gap-3">
            <div>
              <img className="rounded-xl" src="/assets/images/blog/post-3.webp" alt="" />
            </div>
            <div>
              <h3 className="mb-3 font-Montserrat font-medium text-sm text-text_color">
                vegan and meet all <br />
                your needs?
              </h3>
              <span className="font-Montserrat font-medium text-xs text-[#699C47]">
                March 02.2022
              </span>
            </div>
          </Link> 
        </div>
      </div>

      <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
        <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
          Tags
        </h3>
        <div className="space-y-4 space-x-2">
          <button className="py-[6px] px-[14px] bg-white rounded-full font-Montserrat text-sm text-p_text">
            Food
          </button>
          <button className="py-[6px] px-[14px] bg-white rounded-full font-Montserrat text-sm text-p_text">
            Fruits
          </button>
          <button className="py-[6px] px-[14px] bg-white rounded-full font-Montserrat text-sm text-p_text">
            Vegetable
          </button>
          <button className="py-[6px] px-[14px] bg-white rounded-full font-Montserrat text-sm text-p_text">
            Green
          </button>
          <button className="py-[6px] px-[14px] bg-white rounded-full font-Montserrat text-sm text-p_text">
            Natural
          </button>
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
              alt="lemon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
