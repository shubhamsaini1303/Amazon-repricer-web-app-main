import React, { useState } from "react";
import productDetailsImage from "../../../../../assets/images/ProductDetails_Image.png";
import { IoCloseSharp } from "react-icons/io5";
import { TbCirclePercentageFilled, TbRefresh } from "react-icons/tb";
import { FaHome, FaRegCopy, FaSortDown } from "react-icons/fa";
import {
  IoIosTrendingDown,
  IoIosTrendingUp,
  IoMdSettings,
} from "react-icons/io";
import { BsShieldLockFill } from "react-icons/bs";
import { MdOutlinePointOfSale } from "react-icons/md";
import { Drawer, FormControl, MenuItem, Select } from "@mui/material";
import ProductDetailsChart from "./components/productDetailsChart";

const ProductDetailsDrawer = ({ openModal, setOpenModal }) => {
  const [selectedValue, setSelectedValue] = useState("27Dec-6Jan");
  const [selectedDays, setSelectedDays] = useState("Days");

  const handleChange = (event) => {
    setSelectedValue(event?.target?.value);
  };

  const handleDaysChange = (event) => {
    setSelectedDays(event?.target?.value);
  };

  return (
    <Drawer open={openModal} onClose={() => setOpenModal(false)}>
      <div className="fixed right-0">
        <div className="flex !h-screen !max-h-screen flex-col bg-white shadow-xl overflow-y-auto overflow-x-hidden scrollbar-none">
          <div className="px-3 py-[4px] border-b border-[#0000001A] sm:px-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="leading-4 text-xs text-[#404040] font-semibold">
                  Product Details
                </p>
                <button className="rounded border border-[#775DDE] p-1 flex gap-1 items-center">
                  <TbRefresh className="h-3 w-3" color="#775DDE" />
                  <p className="font-normal text-[10px] text-[#775DDE] leading-[12px]">
                    Refresh
                  </p>
                </button>
              </div>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="relative p-[2px] rounded-full bg-[#838383] text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Close panel</span>
                  <IoCloseSharp
                    onClick={() => setOpenModal(false)}
                    className="h-[14px] w-[14px] cursor-pointer"
                    color="#FFFFFF"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="relative flex-1">
            <section className=" mt-1">
              <div className=" flex mx-4">
                <div>
                  <img
                    src={productDetailsImage}
                    alt="Product Image"
                    loading="lazy"
                    className="w-[90px] h-[90px] "
                  ></img>
                </div>
                <div className="ml-[8px]">
                  <div className="text-[#4C4C4C] w-[509px] h-[38px]">
                    <h1 className="font-inter text-[12px] font-semibold">
                      Brooks Men’s Ghost 16 Neutral Running Shoe -
                      Black/Ebony/Burnt Sienna - 8 <br />
                      Medium
                    </h1>
                  </div>
                  <div className="flex [w-509px] items-center h-[21px] text-center gap-[6px]">
                    <div className="w[18px] h-[18px]">
                      <img
                        src="https://readymadeui.com/usa_flag.webp"
                        loading="lazy"
                        className="w-full h-full rounded-xl"
                      />
                    </div>
                    <div className="bg-[#E0E3F6] flex items-center justify-center w-[31px] h-[15px] px-1 gap-[10px] rounded-[2px]">
                      <h1 className="text-[12px] text-[#4A3FC2]">FBA</h1>
                    </div>
                    <div className=" h-[21px]  px-[6px] flex gap-[4px] rounded-[3px] border border-[#0000000D] text-[10px]  text-center">
                      <h1 className="text-[#404040]">Brand</h1>
                      <h1 className="text-[#838383] ">Channel</h1>
                    </div>

                    <div className="  h-[21px]  px-[6px] flex gap-[4px] rounded-[3px] border border-[#0000000D] text-[10px]  text-center">
                      <h1 className="text-[#404040]">Color</h1>
                      <h1 className="text-[#838383]">Black</h1>
                    </div>
                    <div className="  h-[21px]  px-[6px] flex gap-[4px] rounded-[3px] border border-[#0000000D] text-[10px]  text-center">
                      <h1 className="text-[#404040]">Size</h1>
                      <h1 className="text-[#838383]">Large</h1>
                    </div>
                    <div className="  h-[21px]  px-[6px] flex gap-[4px] rounded-[3px] border border-[#0000000D] text-[10px]  text-center">
                      <h1 className="text-[#404040]">UPC</h1>
                      <h1 className="text-[#838383]">Lorem</h1>
                    </div>
                  </div>
                  <div className=" flex gap-1 my-1">
                    <div className="bg-[#F9F9F9] px-1 rounded-[3px]  border ">
                      <h1 className="text-[#404040] text-[10px] font-medium">
                        SKU
                      </h1>
                      <div className="flex items-center gap-[2px]">
                        <h1 className="text-[#838383] text-[10px]">BKDSWSX</h1>
                        <FaRegCopy className="text-[#A9A9A9] w-[10px] h-[10px] ml-[4px]" />
                      </div>
                    </div>
                    <div className="bg-[#F9F9F9] px-1 rounded-[3px]  border ">
                      <h1 className="text-[#404040] text-[10px] font-medium">
                        ASIN
                      </h1>
                      <div className="flex items-center gap-[2px]">
                        <h1 className="text-[#838383] text-[10px]">BKDSWSX</h1>
                        <FaRegCopy className="text-[#A9A9A9] w-[10px] h-[10px] ml-[4px]" />
                      </div>
                    </div>
                    <div className="bg-[#F9F9F9] px-1 rounded-[3px]  border">
                      <h1 className="text-[#404040] text-[10px] font-medium">
                        Parent ASIN
                      </h1>
                      <div className="flex items-center gap-[2px]">
                        <h1 className="text-[#838383] text-[10px] ">BKDSWSX</h1>
                        <FaRegCopy className="text-[#A9A9A9] w-[10px] h-[10px] ml-[4px]" />
                      </div>
                    </div>
                    <div className="bg-[#F9F9F9] px-1 rounded-[3px]  border">
                      <h1 className="text-[#404040] text-[10px] font-medium">
                        Parent Title
                      </h1>
                      <div className="flex items-center gap-[2px]">
                        <h1 className="text-[#838383] text-[10px]">
                          Brooks Men's Ghost 16 Neutral Running Shoes
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="">
              <div className="flex gap-[8px] px-4">
                <div>
                  <h1 className="text-[#EE6C6C] text-[10px] font-semibold leading-[13.31px] font-inter">
                    Cost
                  </h1>
                  <input
                    type="text"
                    placeholder="$28.0"
                    className="w-[98px]  px-1 mt-[4px] py-1 gap-2 rounded border font-inter text-[10px] text-[#404040] font-normal leading-[13.31px] text-left decoration-none underline-from-font decoration-skip-ink-none"
                  />
                </div>
                <div>
                  <h1 className="text-[#1BBA33] text-[10px] font-semibold leading-[13.31px] font-inter">
                    Price
                  </h1>
                  <input
                    type="text"
                    placeholder="$28.0"
                    className="w-[98px]  px-1 mt-[4px] py-1 gap-2 rounded border font-inter text-[10px] text-[#404040] font-normal leading-[13.31px] text-left decoration-none underline-from-font decoration-skip-ink-none"
                  />
                </div>
                <div>
                  <h1 className="text-[#2D5BD0] text-[10px] font-semibold leading-[13.31px] font-inter">
                    Min Price
                  </h1>
                  <input
                    type="text"
                    placeholder="$28.0"
                    className="w-[98px]  px-1 mt-[4px] py-1 gap-2 rounded border font-inter text-[10px] text-[#404040] font-normal leading-[13.31px] text-left decoration-none underline-from-font decoration-skip-ink-none"
                  />
                </div>
                <div>
                  <h1 className="text-[#C31B6F] text-[10px] font-semibold leading-[13.31px] font-inter">
                    Max Price
                  </h1>
                  <input
                    type="text"
                    placeholder="$28.0"
                    className="w-[98px]  px-1 mt-[4px] py-1 gap-2 rounded border font-inter text-[10px] text-[#404040] font-normal leading-[13.31px] text-left decoration-none underline-from-font decoration-skip-ink-none"
                  />
                </div>
                <div>
                  <h1 className="text-[#E98D31] text-[10px] font-semibold leading-[13.31px] font-inter">
                    Strategy
                  </h1>
                  <select className="w-[98px]  px-1 mt-[4px] py-1 gap-2  text-[10px] rounded border cursor-pointer">
                    <option className="text-[10px]" value="Option 1">
                      Option 1
                    </option>
                  </select>
                </div>
                <div className="mt-[17px] text-[12px] font-semibold">
                  <button className="text-white bg-[#775DDE] w-[98px] h-[23px]  rounded-[4px]">
                    Save
                  </button>
                </div>
              </div>
              <div className="mt-1">
                <div className="h-[22px] py-2.5 px-4 border-t flex justify-between items-center bg-gradient-to-r from-[#8D88FA] to-[#F183DC]">
                  <h1 className="text-[#FFFFFF] text-[10px]">AI Analysis</h1>
                  <div className="flex items-center">
                    <h1 className="text-[10px] text-[#FFFFFF]">
                      Reduce Price by 5% to $80
                    </h1>
                    <div className="ml-2 rounded-full bg-white p-[2px]">
                      <IoIosTrendingDown
                        className="h-[12px] w-[12px]"
                        color="#F95842"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-1">
              <div className="mx-4">
                <div className="text-[10px] text-[#404040] ">
                  <h1 className="font-semibold">More Details</h1>
                </div>
                <div className="flex mt-1 gap-[8px] ">
                  <div className="flex w-[119px] bg-[#F9F9F9]  items-center  px-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px] h-[40px]">
                    <div className="w-[16px] ">
                      <FaHome />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Quantity
                        </h1>
                        <FaSortDown className="w-[10px] h-[10px] ml-[4px] text-[#404040]" />
                      </div>
                      <div className="text-[#838383] text-[10px]  ">
                        <p className=" font-normal">99</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  w-[119px]  bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px] h-[40px]">
                    <div className="w-[16px] ">
                      <FaHome />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          ROI/Profit
                        </h1>
                        <p className="text-[#838383] text-[10px] font-normal">
                          23.0%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[119px]  bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px] h-[40px]">
                    <div className="w-[16px]  text-[#4B38D5]">
                      <TbCirclePercentageFilled />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Margin %
                        </h1>
                        <p className="text-[#838383] text-[10px] font-normal">
                          13.0%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[119px]    bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px] h-[40px]">
                    <div className="w-[16px]  text-[#25B60F]">
                      <BsShieldLockFill />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Condition
                        </h1>
                        <p className="text-[#838383] text-[10px]  font-normal">
                          Lorem
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  w-[119px] bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px] h-[40px]">
                    <div className="w-[16px] ">
                      <FaHome />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Total Fees
                        </h1>
                        <p className="text-[#838383] text-[10px] font-normal">
                          $23.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="h-[4px] bg-[#F1F1F1] mt-2 "></div>
            <section className=" mt-1 ">
              <div className="mx-4">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-[10px] text-[#404040]">
                    Stats
                  </h1>
                </div>
                <div className="flex gap-[8px] mt-1">
                  <div className="flex w-[119px] h-[40px]  bg-[#F9F9F9]  items-center p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px] text-[#456BCD]">
                      <MdOutlinePointOfSale />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Sales 7D
                        </h1>
                        <IoMdSettings className="w-[10px] h-[10px] ml-[4px] text-[#404040]" />
                      </div>
                      <div className="text-[#838383] text-[10px]  ">
                        <p className=" font-normal">35 Units</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[119px]   bg-[#F9F9F9]  items-center p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px] h-[40px]">
                    <div className="w-[16px] h-[16px] text-[#456BCD]">
                      <MdOutlinePointOfSale />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Sales 30D
                        </h1>
                        <IoMdSettings className="w-[10px] h-[10px] ml-[4px] text-[#404040]" />
                      </div>
                      <div className="text-[#838383] text-[10px]  ">
                        <p className=" font-normal">35 Units</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[119px]   h-[40px] bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px] text-[#4B38D5]">
                      <TbCirclePercentageFilled />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Children
                        </h1>
                        <p className="text-[#838383] text-[10px]  font-normal">
                          7 Childs Active
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[119px]  h-[40px] bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px] text-[#25B60F]">
                      <BsShieldLockFill />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Inventory Left
                        </h1>
                        <p className="text-[#838383] text-[10px]  font-normal">
                          3 Days
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[119px]   bg-[#F9F9F9]  items-center p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px] h-[40px]">
                    <div className="w-[16px] h-[16px]">
                      <FaHome />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          SKU Created
                        </h1>
                        <p className="text-[#838383] text-[10px]  font-normal">
                          12 Oct 24
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[8px] mt-1">
                  <div className="flex w-[151px] bg-[#F9F9F9]  items-center p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px]">
                      <FaHome />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Rank
                        </h1>
                        <FaSortDown className="w-[10px] h-[10px] ml-[4px] text-[#404040]" />
                      </div>
                      <div className="text-[#838383] text-[10px]  ">
                        <p className=" font-normal">#4233 in Shoes</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex   w-[151px]  bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px]">
                      <FaHome />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Avg age of Inventory
                        </h1>
                        <p className="text-[#838383] text-[10px]  font-normal">
                          22 Days
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  w-[151px]   bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px] text-[#4B38D5]">
                      <TbCirclePercentageFilled />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Buybox Eligible
                        </h1>
                        <p className="text-[#838383] text-[10px] font-normal">
                          13.0%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex   w-[151px]  bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px] text-[#25B60F]">
                      <BsShieldLockFill />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Buybox Price
                        </h1>
                        <p className="text-[#838383] text-[10px]  font-normal">
                          Suppressed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="h-[4px] bg-[#F1F1F1] mt-2 "></div>
            <section className="mt-1 ">
              <div className="mx-4">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-[10px] text-[#404040]">
                    Competitors Insights
                  </h1>
                </div>
                <div className="flex mt-1 gap-[8px] ">
                  <div className="flex w-[310px] h-[40px]   bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px]">
                      <FaHome />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Competition Score
                        </h1>
                      </div>
                      <div className="text-[#838383] text-[10px] ">
                        <p className=" font-normal">89</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  w-[310px] h-[40px]  bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px]">
                      <FaHome />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Comp. UoH around my price
                        </h1>
                        <p className="text-[#838383] text-[10px] font-normal">
                          400
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-1 gap-[8px] ">
                  <div className="flex w-[310px] h-[42px]  bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px] text-[#4B38D5]">
                      <TbCirclePercentageFilled />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          Comp. priced around me & below
                        </h1>
                        <p className="text-[#838383] text-[10px] font-normal">
                          400
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[310px] h-[42px]    bg-[#F9F9F9]  items-center  p-[6px] gap-[8px] border-[1px] border-gray-300 rounded-[4px]">
                    <div className="w-[16px] h-[16px] text-[#25B60F]">
                      <BsShieldLockFill />
                    </div>
                    <div>
                      <div className=" items-center">
                        <h1 className="text-[10px] text-[#404040] font-medium">
                          No. of Competitors Selling This ASIN
                        </h1>
                        <p className="text-[#838383] text-[10px]  font-normal">
                          400
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="h-[4px] bg-[#F1F1F1] mt-2 "></div>
            <section className="my-1">
              <div className="mx-4">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <h1 className="text-[10px] font-semibold">Price History</h1>
                    <FaSortDown className="w-[10px] h-[10px] ml-[4px] -mt-1 text-[#404040]" />
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <div className="flex w-[189px] items-center h-[20px] px-[8px] text-[#775DDE] border border-gray-300 rounded">
                        <select
                          id="date-dropdown"
                          value={selectedValue}
                          onChange={handleChange}
                          className="w-full h-full text-[11px] leading-[13px] text-[#775DDE] font-medium font-sans border-none bg-transparent outline-none"
                        >
                          <option value="27Dec-6Jan">
                            27 Dec 2024 - 06 Jan 2025
                          </option>
                          <option value="lastWeek">Last Week</option>
                          <option value="lastMonth">Last Month</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="flex w-[80px] items-center h-[20px] text-[#775DDE] px-2 border border-gray-300 rounded">
                        <select
                          id="days-dropdown"
                          value={selectedDays}
                          onChange={handleDaysChange}
                          className="w-full h-full text-[11px] leading-[13px] text-[#775DDE] font-medium font-sans border-none bg-transparent outline-none"
                        >
                          <option value="Days">Days</option>
                          <option value="lastWeek">1 day</option>
                          <option value="lastMonth">2 days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <ProductDetailsChart height="140px" width="100%" />
            <section className="px-4 my-1">
              <p className="leading-[12px] font-semibold text-[#404040] text-[10px]">
                Statistics
              </p>
              <div className="mt-1 flex gap-2">
                <div className="flex flex-col px-[6px] py-1 rounded bg-[#F9F9F9] border border-[#00000005] w-full">
                  <p className="leading-[12px] font-medium text-[#404040] text-[10px]">
                    Average Price
                  </p>
                  <p className="leading-[12px] font-normal text-[#838383] text-[10px]">
                    99
                  </p>
                </div>
                <div className="flex flex-col px-[6px] py-1 rounded bg-[#F9F9F9] border border-[#00000005] w-full">
                  <p className="leading-[12px] font-medium text-[#404040] text-[10px]">
                    Avg. sales rank history
                  </p>
                  <p className="leading-[12px] font-normal text-[#838383] text-[10px]">
                    99
                  </p>
                </div>
                <div className="flex flex-col px-[6px] py-1 rounded bg-[#F9F9F9] border border-[#00000005] w-full">
                  <p className="leading-[12px] font-medium text-[#404040] text-[10px]">
                    Min Price
                  </p>
                  <p className="leading-[12px] font-normal text-[#838383] text-[10px]">
                    $23.00
                  </p>
                </div>
                <div className="flex flex-col px-[6px] py-1 rounded bg-[#F9F9F9] border border-[#00000005] w-full">
                  <p className="leading-[12px] font-medium text-[#404040] text-[10px]">
                    Max Price
                  </p>
                  <p className="leading-[12px] font-normal text-[#838383] text-[10px]">
                    $23.00
                  </p>
                </div>
              </div>
            </section>
            <section className="px-4 mb-2">
              <div className="flex justify-between items-center px-2 py-[2px]">
                <div className="flex gap-[10px] items-center">
                  <IoIosTrendingUp className="h-4 w-4" color="#39BC4D" />
                  <p className="text-[#404040] text-[10px] font-normal leading-[12px]">
                    Increased price from $22.00 to $28.00
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-[2px] bg-[#F9F9F9]">
                <div className="flex gap-[10px] items-center">
                  <IoIosTrendingDown className="h-4 w-4" color="#F95842" />
                  <p className="text-[#404040] text-[10px] font-normal leading-[12px]">
                    Reduced price from $33.00 to $23.00
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-[2px]">
                <div className="flex gap-[10px] items-center">
                  <IoIosTrendingUp className="h-4 w-4" color="#39BC4D" />
                  <p className="text-[#404040] text-[10px] font-normal leading-[12px]">
                    Increased price from $22.00 to $28.00
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 py-[2px] bg-[#F9F9F9]">
                <div className="flex gap-[10px] items-center">
                  <IoIosTrendingDown className="h-4 w-4" color="#F95842" />
                  <p className="text-[#404040] text-[10px] font-normal leading-[12px]">
                    Reduced price from $33.00 to $23.00
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-1">
                <button className="text-center text-[10px] text-[#775DDE] font-medium leading-[12px]">
                  Show More
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ProductDetailsDrawer;
