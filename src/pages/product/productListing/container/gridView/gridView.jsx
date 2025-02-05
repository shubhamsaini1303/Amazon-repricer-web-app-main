import React from "react";
import productImage1 from "../../../../../assets/images/Product_Image_01.png";
import productImage2 from "../../../../../assets/images/Product_Image_02.png";
import { TbSubtask } from "react-icons/tb";

const products = [
  {
    id: 1,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 2,
    image: productImage2,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 3,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 4,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 5,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 6,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 7,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 8,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 9,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 10,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 11,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 12,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 13,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 14,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 15,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 16,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
  {
    id: 17,
    image: productImage1,
    title:
      "Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt Sienna - 8 Medium",
  },
];

const GridView = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 rounded m-4">
        {products?.map((item) => (
          <div
            key={item?.id}
            className="relative flex h-full w-full 2xl:w-auto 2xl:max-w-full max-w-[268.8px] max-h-[290px] flex-col bg-white rounded overflow-hidden shadow-[0px_1px_4px_0px_#00000026]"
          >
            <div className="relative flex overflow-hidden w-full">
              <img
                className="object-cover bg-[#F4F4F4] w-full"
                alt="Product Image"
                src={item?.image}
              />
              <input
                className="absolute top-2 right-2 bg-[#D4D4D4] shadow-md border border-[#EFEFEF] rounded-full h-5 w-5 appearance-none checked:bg-[#33C82E] checked:border-[#33C82E] checked:before:content-['✓'] checked:before:text-white checked:before:font-bold checked:before:text-xs checked:before:flex checked:before:items-center checked:before:justify-center"
                type="checkbox"
              />
              <p className="absolute bottom-2 left-2 px-1 py-[2px] rounded-[2px] leading-[13px] text-[11px] font-normal text-[#404040] backdrop-blur-[5.2px] bg-[#FFFFFF80]">
                Shoes
              </p>
            </div>
            <div className="py-3 px-[10px]">
              <p className="font-semibold text-[11px] leading-[17px] text-[#4C4C4C] w-full block">
                {item?.title}
              </p>
              <div className="flex gap-[6px] items-center mt-2 flex-wrap">
                <div className="rounded-[2px] px-1 py-[2.5px] border border-[#0000000F] flex gap-1 items-center text-center justify-center">
                  <p className="text-[#158E1D] text-[11px] font-normal leading-[13px]">
                    $23.00 - $28.00
                  </p>
                </div>
                <div className="rounded-[2px] px-1 py-[2.5px] border border-[#0000000F] flex gap-1 items-center text-center justify-center">
                  <p className="text-[#404040] text-[11px] font-normal leading-[13px]">
                    #4233
                  </p>
                </div>
                <div className="rounded-[2px] px-1 py-[2.5px] border border-[#0000000F] flex gap-1 items-center text-center justify-center">
                  <p className="text-[#404040] text-[11px] font-normal leading-[13px]">
                    99 UoH
                  </p>
                </div>
                <div className="rounded-[2px] px-1 py-[2.5px] border border-[#0000000F] flex gap-1 items-center text-center justify-center">
                  <TbSubtask className="h-[10px] w-[10px]" color="#F25BC0" />
                  <p className="text-[#404040] text-[11px] font-normal leading-[13px]">
                    8 Child
                  </p>
                </div>
                <div className="rounded-[2px] px-1 py-[2.5px] border border-[#0000000F] flex gap-1 items-center text-center justify-center">
                  <p className="text-[#404040] text-[11px] font-normal leading-[13px]">
                    250 Units
                  </p>
                </div>
                <div className="rounded-[2px] px-1 py-[2.5px] border border-[#0000000F] flex gap-1 items-center text-center justify-center">
                  <p className="text-[#404040] text-[11px] font-normal leading-[13px]">
                    35 Units
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridView;
