import productData from "@/data/product/productData";
import { ArrowLeft, ArrowRight, CaretDown, Plus } from "@phosphor-icons/react";
// import productData from "../../data/product/productData";

// import ProductCard from "./ProductCard";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ShopProduct = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  // const [selectDropdown, setSelectDropdown] = useState("Popular");
  const [selectDropdown, setSelectDropdown] = useState("");
  const [selectCategoryDropdown, setselectCategoryDropdown] = useState("");
  const value = ["Highest Rated", "Newest", "Most Selling"];
  const category = [
    "Meat & Fish",
    "Grocery",
    "Bread & Bakery",
    "Fruits",
    "Vegetable",
    "Breakfast & Dairy",
  ];
  const handleDropdown = (item) => {
    setSelectDropdown(item);
    setShowDropdown(false);
    console.log("MY DROPDOWN", showDropdown);
  };
  const handleCategoryDropdown = (item) => {
    setselectCategoryDropdown(item);
    setShowCategoryDropdown(false);
    console.log("MY showCategoryDropdown", showCategoryDropdown);
  };

  return (
    <div className="container">
      <div className="py-8 md:py-10">
        <div className="flex justify-between mb-6">
          <button
            className="relative"
            onBlur={() => setShowCategoryDropdown(false)}
          >
            <div
              onClick={() => setShowCategoryDropdown(true)}
              className="flex justify-between items-center  text-xs md:text-sm px-2 md:px-3 py-1 md:py-3 md:w-[204px] h-10 md:h-12 bg-[#F5F5F5] rounded-md md:rounded-xl"
            >
              <span className="text-text_color text-xs md:text-base">
                Categories
              </span>
              {selectCategoryDropdown}
              {/* <CaretDown
                size={18}
                className={showDropdown ? "rotate-180" : ""}
              /> */}
              {/* <Plus size={20} /> */}
            </div>

            {/* dropdown */}
            {showCategoryDropdown && (
              // <ul className="absolute min-w-[195px] bg-white z-20  right-0 shadow-md rounded-md mt-[10px]">
              <ul className="absolute  bg-[#F5F5F5] max-w-[204px] z-20  right-0 shadow-[0_4px_15px_rgba(136,136,136,0.21)] rounded-md mt-[10px]">
                {category.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleCategoryDropdown(item)}
                    className="hover:bg-green-500 hover:text-white text-p_text  text-xs md:text-sm flex items-start py-[9px] px-2 md:px-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </button>

          <button className="relative" onBlur={() => setShowDropdown(false)}>
            <div
              onClick={() => setShowDropdown(true)}
              className="flex justify-between items-center gap-3 text-xs md:text-sm px-2 md:px-3 py-1 md:py-3 md:w-[204px] h-10 md:h-12 bg-[#F5F5F5] rounded-md md:rounded-xl"
            >
              <span className="text-text_color text-xs md:text-base">
                Sort by
              </span>
              {selectDropdown}
              <CaretDown
                size={18}
                className={showDropdown ? "rotate-180" : ""}
              />
            </div>

            {/* dropdown */}
            {showDropdown && (
              // <ul className="absolute min-w-[195px] bg-white z-20  right-0 shadow-md rounded-md mt-[10px]">
              <ul className="absolute  bg-white  max-w-[204px] z-20  right-0 shadow-md rounded-md mt-[10px]">
                {value.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleDropdown(item)}
                    className="hover:bg-green-500 hover:text-white text-[#5C727D] text-xs md:text-sm flex items-start py-[9px] px-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map((item, i) => (
            <ProductCard key={i} data={item} />
          
          ))}
        </div>

        <div className="flex justify-between items-center mt-5">
          <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
            <ArrowLeft size={20} className="text-[#838D8F]" />
            <span className="font-Montserrat font-medium text-[10px] md:text-sm text-[#838D8F]">
              Previous
            </span>
          </button>
          <div>
            <a
              className="bg-[#EDEDE3] text-primary_3 py-1 md:py-2 px-2 md:px-3 rounded-lg"
              href="#"
            >
              1
            </a>
            <a
              className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
              href="#"
            >
              2
            </a>
            <a
              className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
              href="#"
            >
              ...
            </a>
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

            <ArrowRight size={20} className="text-text_color" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
