import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegFolderOpen, FaSortDown, FaSortUp } from "react-icons/fa";
import { IoCloseOutline, IoFilterSharp, IoGridOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { TbFileExport, TbMobiledata } from "react-icons/tb";
import FilterDropdown from "./filterDropdown";

const MenuBar = ({ onViewChange, currentView }) => {
  const [openFilterDropdown, setOpenFilterDropdown] = useState(false);

  const toggleFilterDropdown = () => {
    setOpenFilterDropdown(!openFilterDropdown);
  };

  return (
    <>
      <div className="flex justify-between flex-wrap items-center gap-3 px-4 border-b border-[#F2F2F2] overflow-visible">
        <div className="flex">
          <div className="flex items-center">
            <div className="flex flex-col">
              <button
                className="py-[10px] px-2 items-center flex gap-2"
                onClick={() => onViewChange("list")}
              >
                <MdFormatListBulleted
                  className="h-5 w-5"
                  color={currentView === "list" ? "#775DDE" : "#404040"}
                />
                <p
                  className={`text-xs font-semibold leading-[14px] ${
                    currentView === "list" ? "text-[#775DDE]" : "text-[#404040]"
                  }`}
                >
                  List View
                </p>
              </button>
              {currentView === "list" && (
                <div className="border-b-4 border-[#775DDE] block rounded-tl-lg rounded-tr-lg"></div>
              )}
            </div>
            <div className="flex flex-col">
              <button
                className="py-[10px] px-2 items-center flex gap-2"
                onClick={() => onViewChange("grid")}
              >
                <IoGridOutline
                  className="h-5 w-5"
                  color={currentView === "grid" ? "#775DDE" : "#404040"}
                />
                <p
                  className={`text-xs font-semibold leading-[14px] ${
                    currentView === "grid" ? "text-[#775DDE]" : "text-[#404040]"
                  }`}
                >
                  Icon View
                </p>
              </button>
              {currentView === "grid" && (
                <div className="border-b-4 border-[#775DDE] block rounded-tl-lg rounded-tr-lg"></div>
              )}
            </div>
            <div className="flex flex-col">
              <button
                className="py-[10px] px-2 items-center flex gap-2"
                onClick={() => onViewChange("productListing")}
              >
                <MdFormatListBulleted
                  className="h-5 w-5"
                  color={
                    currentView === "productListing" ? "#775DDE" : "#404040"
                  }
                />
                <p
                  className={`text-xs font-semibold leading-[14px] ${
                    currentView === "productListing"
                      ? "text-[#775DDE]"
                      : "text-[#404040]"
                  }`}
                >
                  Product Listing
                </p>
              </button>
              {currentView === "productListing" && (
                <div className="border-b-4 border-[#775DDE] block rounded-tl-lg rounded-tr-lg"></div>
              )}
            </div>
            <div
              className={`flex flex-col border-l border-[#F2F2F2] ${
                openFilterDropdown && "bg-white shadow-lg"
              }`}
            >
              <button
                onClick={toggleFilterDropdown}
                className="py-[10px] px-2 items-center flex gap-2 relative"
              >
                <IoFilterSharp className="h-5 w-5" color="#404040" />
                <p className="text-[#404040] text-xs font-semibold leading-[14px] flex gap-1 items-center">
                  Filters
                  {openFilterDropdown ? (
                    <FaSortDown
                      className="h-3 w-3 cursor-pointer -mt-1"
                      color="#404040"
                    />
                  ) : (
                    <FaSortUp
                      className="h-3 w-3 cursor-pointer mt-[6px]"
                      color="#404040"
                    />
                  )}
                </p>
                {openFilterDropdown && <FilterDropdown />}
              </button>
            </div>
          </div>
          <div className="flex gap-2 p-2">
            <div className="rounded border border-[#0000000F] flex items-center">
              <div className="flex gap-1 items-center px-2 py-[4.5px] border-r border-[#F0F0F0]">
                <input
                  type="text"
                  placeholder="Search"
                  className="font-normal text-xs leading-[14px] text-[#838383]"
                />
                <button className="font-medium text-[11px] leading-[14px] text-[#27303F]">
                  By ASIN
                </button>
              </div>
              <CiSearch
                className="h-4 w-4 mx-2 my-1 cursor-pointer"
                color="#775DDE"
              />
            </div>
            <button className="rounded border border-[#0000000F] flex gap-1 items-center px-2 py-[4.5px]">
              <span className="font-normal text-xs leading-[14px] text-[#838383]">
                Fulfilment
              </span>
              <span className="font-medium text-[11px] leading-[14px] text-[#27303F]">
                All
              </span>
            </button>
            <button className="rounded border border-[#0000000F] flex gap-1 items-center px-2 py-[4.5px]">
              <span className="font-normal text-xs leading-[14px] text-[#838383]">
                Status
              </span>
              <span className="font-medium text-[11px] leading-[14px] text-[#27303F]">
                Active
              </span>
            </button>
            <button className="rounded border border-[#0000000F] flex gap-1 items-center px-2 py-[4.5px]">
              <img
                src="https://readymadeui.com/usa_flag.webp"
                className="w-4 h-4 rounded-full"
              />
            </button>
            <button className="rounded border border-[#0000000F] flex gap-1 items-center px-2 py-[4.5px]">
              <span className="font-medium text-xs leading-[14px] text-[#775DDE]">
                Auto-Triggers
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <button className="flex gap-1 items-center py-[4.5px] px-[6px]">
              <p className="font-medium text-xs text-[#404040] leading-[14px]">
                Columns
              </p>
            </button>
            <button className="flex gap-1 items-center py-[4.5px] px-[6px]">
              <FaRegFolderOpen className="h-[14px] w-[14px]" color="#404040" />
              <p className="font-medium text-xs text-[#404040] leading-[14px]">
                Active Views
              </p>
            </button>
            <button className="flex gap-1 items-center py-[4.5px] px-[6px]">
              <TbFileExport className="h-[14px] w-[14px]" color="#404040" />
              <p className="font-medium text-xs text-[#404040] leading-[14px]">
                Export
              </p>
            </button>
          </div>
          <button className="bg-[#775DDE] border border-[#0000001A] rounded text-center items-center text-xs leading-[14px] font-semibold text-[#FFFFFF] px-[17.5px] py-[4.5px]">
            Save
          </button>
        </div>
      </div>

      {currentView !== "productListing" && openFilterDropdown && (
        <div className="px-4 py-[10px] flex gap-2">
          <div className="rounded-xl bg-[#0000000D] px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Filter
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Status
            </p>
            <IoCloseOutline
              className="h-3 w-3 cursor-pointer"
              color="#775DDE"
            />
          </div>
          <div className="rounded-xl bg-[#0000000D] px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Filter
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Status
            </p>
            <IoCloseOutline
              className="h-3 w-3 cursor-pointer"
              color="#775DDE"
            />
          </div>
          <div className="rounded-xl bg-[#0000000D] px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Filter
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Status
            </p>
            <IoCloseOutline
              className="h-3 w-3 cursor-pointer"
              color="#775DDE"
            />
          </div>
          <div className="rounded-xl bg-[#0000000D] px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Filter
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Status
            </p>
            <IoCloseOutline
              className="h-3 w-3 cursor-pointer"
              color="#775DDE"
            />
          </div>
          <div className="rounded-xl bg-[#0000000D] px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Filter
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Status
            </p>
            <IoCloseOutline
              className="h-3 w-3 cursor-pointer"
              color="#775DDE"
            />
          </div>
          <div className="rounded-xl bg-[#0000000D] px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Filter
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Status
            </p>
            <IoCloseOutline
              className="h-3 w-3 cursor-pointer"
              color="#775DDE"
            />
          </div>
          <div className="rounded-xl bg-[#0000000D] px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Filter
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Status
            </p>
            <IoCloseOutline
              className="h-3 w-3 cursor-pointer"
              color="#775DDE"
            />
          </div>
        </div>
      )}

      {currentView === "productListing" && (
        <div className="px-4 py-[10px] flex">
          <div className="px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#775DDE] leading-[11px]">
              Sort by
            </p>
            <p className="font-medium text-[11px] text-[#775DDE] leading-[13px]">
              Status
            </p>
            <FaSortDown
              className="h-3 w-3 cursor-pointer -mt-1"
              color="#775DDE"
            />
          </div>
          <div className="px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Group by
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              None
            </p>
            <FaSortDown
              className="h-3 w-3 cursor-pointer -mt-1"
              color="#404040"
            />
          </div>
          <div className="px-[10px] py-1 flex gap-1 items-center">
            <p className="font-normal text-[11px] text-[#838383] leading-[11px]">
              Price
            </p>
            <p className="font-medium text-[11px] text-[#404040] leading-[13px]">
              Low to High
            </p>
            <FaSortDown
              className="h-3 w-3 cursor-pointer -mt-1"
              color="#404040"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBar;
