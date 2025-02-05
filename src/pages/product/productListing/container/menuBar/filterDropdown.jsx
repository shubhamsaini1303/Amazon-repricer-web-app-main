import React from "react";

const FilterDropdown = () => {
  return (
    <>
      <div className="absolute z-50 opacity-[100%] rounded-br-lg rounded-bl-lg bg-white shadow-2xl w-[165px] top-10 left-0">
        <div className="p-2 font-medium leading-[13px] text-start text-[11px] text-[#404040] border-b border-[#0000000F]">
          SKU containing the word
        </div>
        <div className="p-2 font-medium leading-[13px] text-start text-[11px] text-[#404040] border-b border-[#0000000F]">
          Amount Over ___
        </div>
        <div className="p-2 font-medium leading-[13px] text-start text-[11px] text-[#404040] border-b border-[#0000000F]">
          Stock
        </div>
        <div className="p-2 font-medium leading-[13px] text-start text-[11px] text-[#404040] border-b border-[#0000000F]">
          Filter
        </div>
        <div className="p-2 font-medium leading-[13px] text-start text-[11px] text-[#404040] border-b border-[#0000000F]">
          Filter
        </div>
      </div>
    </>
  );
};

export default FilterDropdown;
