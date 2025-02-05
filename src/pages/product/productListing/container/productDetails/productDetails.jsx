import { useState } from "react";
import * as React from "react";
import { IoIosTrendingDown, IoMdCopy, IoMdMore } from "react-icons/io";
import { RiExpandUpDownFill, RiShoppingBag3Line } from "react-icons/ri";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import ProductDetailsDrawer from "./productDetailsDrawer";
import { arrayMove } from "@dnd-kit/sortable";
import DataTable from "../../../../../shared/components/dataTable";
import { Tooltip } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";

const getInitialRows = () => {
  const rows = [];
  for (let i = 0; i < 35; i++) {
    rows.push({
      id: i + 1,
    });
  }
  return rows;
};

export default function ProductDetails() {
  const [openModal, setOpenModal] = useState(false);

  const [columns, setColumns] = useState([
    {
      id: "img",
      field: "img",
      headerName: "Img",
      sortable: false,
      disableColumnMenu: true,
      width: 30,
      height: 28,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Img
          </div>
        );
      },
      renderCell: (params) => (
        <img
          src={params.row.img || "https://readymadeui.com/usa_flag.webp"}
          alt="USA Flag"
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "2px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        />
      ),
    },
    {
      id: "sku",
      field: "sku",
      headerName: "SKU",
      width: 115,
      height: 28,
      sortable: true,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            SKU
          </div>
        );
      },
      renderCell: (params) => (
        <>
          <div className="flex gap-[2px] flex-col whitespace-normal">
            <div className="flex items-center">
              <div className="flex gap-[2px] items-center pr-[6px]">
                <p className="font-medium text-[11px] text-[#404040] leading-[14px]">
                  Abc823798
                </p>
                <IoMdCopy className="h-[9px] w-[9px]" color="#A9A9A9" />
              </div>
              <div className="pl-[6px] border-l border-[#0000001A]">
                <RiShoppingBag3Line
                  className="h-[9px] w-[9px]"
                  color="#39BC4D"
                />
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <img
                src={
                  params?.row?.img || "https://readymadeui.com/usa_flag.webp"
                }
                alt="USA Flag"
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                }}
              />
              <p className="rounded-[2px] px-[2px] bg-[#E0E3F6] font-normal text-[9px] text-[#766FC4] leading-[10px] items-center text-center">
                FBA
              </p>
              <div className="flex gap-[2px] items-center">
                <p className="font-normal text-[9px] text-[#838383] leading-[11px] items-center text-center">
                  Abc823798
                </p>
                <IoMdCopy className="h-[9px] w-[9px]" color="#A9A9A9" />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "title",
      field: "title",
      headerName: "Title",
      width: 250,
      sortable: true,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Title
          </div>
        );
      },
      renderCell: (params) => (
        <Tooltip
          title="Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt
            Sienna - 8 Medium"
          placement="top"
          interactive
        >
          <button
            onClick={() => setOpenModal(true)}
            className="items-center text-left text-[#404040] leading-[13px] text-[11px] font-medium break-words whitespace-normal mt-1"
          >
            Brooks Men’s Ghost 16 Neutral Running Shoe - Black/Ebony/Burnt
            Sienna - 8 Medium
          </button>
        </Tooltip>
      ),
    },
    {
      id: "qty",
      field: "qty",
      headerName: "Qty",
      width: 51,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Qty
          </div>
        );
      },
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#404040] font-medium">
          {params.row.qty || "99"}
        </div>
      ),
    },
    {
      id: "myPrice",
      field: "myPrice",
      headerName: "My Price",
      width: 80,
      sortable: true,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            My Price
          </div>
        );
      },
      renderCell: (params) => (
        <div className="flex justify-center">
          <input
            type="text"
            className="mt-[7px] h-[20px] w-full rounded-[3px] border border-[#0000001A] text-[#404040] text-[11px] leading-[13px] px-1"
            placeholder="$28.00"
          />
        </div>
      ),
    },
    {
      id: "status",
      field: "status",
      headerName: "Status",
      width: 59,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Status
          </div>
        );
      },
      renderCell: (params) => (
        <div className="flex justify-center items-center mt-3">
          <div className="!h-2 !w-2 rounded-full bg-[#39BC4D]"></div>
        </div>
      ),
    },
    {
      id: "cost",
      field: "cost",
      headerName: "Cost",
      width: 53,
      sortable: true,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Cost
          </div>
        );
      },
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#666666] font-normal">
          $50.32
        </div>
      ),
    },
    {
      id: "profit",
      field: "profit",
      headerName: "Profit",
      width: 60,
      sortable: true,
      disableColumnMenu: false,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Profit
          </div>
        );
      },
      renderCell: (params) => (
        <>
          <div className="flex flex-col flex-wrap justify-center items-center text-center mt-1">
            <div className="text-center text-[11px] leading-[13px] text-[#666666] font-normal">
              $50.32
            </div>
            <div className="text-center text-[9px] leading-[10px] text-[#838383] font-normal">
              24.1%
            </div>
          </div>
        </>
      ),
    },
    {
      id: "sales",
      field: "sales",
      headerName: "Sales(7D)",
      width: 60,
      sortable: true,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Sales (7D)
          </div>
        );
      },
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#666666] font-normal">
          10
        </div>
      ),
    },
    {
      id: "sale",
      field: "sale",
      headerName: "Sales(30D)",
      width: 60,
      sortable: true,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Sales (30D)
          </div>
        );
      },
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#666666] font-normal">
          29
        </div>
      ),
    },
    {
      id: "aiPlan",
      field: "aiPlan",
      headerName: "AI Plan",
      width: 100,
      sortable: false,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            AI Plan
          </div>
        );
      },
      renderCell: (params) => (
        <div className="flex justify-center items-center gap-2 mt-1">
          <IoIosTrendingDown className="h-4 w-4" color="#F95842" />
          {/* <IoIosTrendingUp className="h-4 w-4" color="#39BC4D" /> */}
          <div className="text-left text-[11px] leading-[13px] text-[#666666] font-normal whitespace-normal">
            Price by{" "}
            <span className="text-center text-[11px] text-[#666666] font-semibold whitespace-normal">
              5%
            </span>{" "}
            to $80
          </div>
        </div>
      ),
    },
    {
      id: "ranking",
      field: "ranking",
      headerName: "Ranking",
      width: 60,
      sortable: true,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Ranking
          </div>
        );
      },
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#666666] font-normal">
          5321
        </div>
      ),
    },
    {
      id: "lowestCompPrice",
      field: "lowestCompPrice",
      headerName: "Lowest Comp. Price",
      width: 130,
      sortable: true,
      disableColumnMenu: false,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Lowest Comp. Price
          </div>
        );
      },
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#666666] font-normal">
          $90.00
        </div>
      ),
    },
    {
      id: "buyBox",
      field: "buyBox",
      headerName: "Buy Box",
      width: 70,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Buy Box
          </div>
        );
      },
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#666666] font-normal">
          $25.00
        </div>
      ),
    },
    {
      id: "maxPrice",
      field: "maxPrice",
      headerName: "Max. Price Min. Price",
      width: 85,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Max. Price Min. Price
          </div>
        );
      },
      renderCell: (params) => (
        <div className="flex flex-col flex-wrap justify-center items-center text-center mt-1">
          <div className="flex gap-1 items-center">
            <RiExpandUpDownFill className="h-[10px] w-2" color="#22B138" />
            <div className="text-center text-[11px] leading-[13px] text-[#22B138] font-normal">
              $89.00
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <RiExpandUpDownFill className="h-[10px] w-2" color="#F95842" />
            <div className="text-center text-[11px] leading-[13px] text-[#F95842] font-normal">
              $89.00
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "currentStrategy",
      field: "currentStrategy",
      headerName: "Current Strategy",
      width: 76,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Current Strategy
          </div>
        );
      },
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="text-center text-[11px] text-[#666666] font-normal">
          Option 1
        </div>
      ),
    },
    {
      id: "star",
      field: "star",
      headerName: <FaStar className="h-[11px] w-[11px]" color="#F1C45C" />,
      width: 20,
      sortable: false,
      renderHeader: () => {
        return <FaStar className="h-[11px] w-[11px]" color="#F1C45C" />;
      },
      renderCell: (params) => (
        <div className="text-center items-center flex justify-center mt-3">
          <FaRegStar className="h-[11px] w-[11px]" color="#989898" />
        </div>
      ),
    },
    {
      id: "actions",
      field: "actions",
      headerName: "Actions",
      width: 63,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <div className="whitespace-normal leading-[10px] text-left text-[10px] text-[#404040] font-medium">
            Actions
          </div>
        );
      },
      renderCell: (params) => (
        <div className="mt-2 flex gap-1 justify-center items-center border-l border-[#F8F8F8]">
          <FiEdit3 className="h-3 w-3" color="#838383" />
          <IoMdMore className="h-3 w-3" color="#838383" />
        </div>
      ),
    },
  ]);

  const [rows, setRows] = useState(getInitialRows());

  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const fetchMoreData = () => {
    setLoading(true);
    clearTimeout(timeoutRef);
    timeoutRef.current = setTimeout(() => {
      setRows((prevRows) => {
        const lastRow = prevRows[prevRows.length - 1]?.id;
        const newRows = [...prevRows];
        for (let i = lastRow; i < lastRow + 20; i++) {
          newRows.push({ id: i + 1 });
        }
        return newRows;
      });
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 10 < window.scrollY + window.innerHeight &&
      !loading
    ) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = columns.findIndex((col) => col.id === active.id);
      const newIndex = columns.findIndex((col) => col.id === over.id);
      setColumns((prevColumns) => arrayMove(prevColumns, oldIndex, newIndex));
    }
  };

  const getKey = () => {
    try {
      const json = JSON.parse(rows);
      return json;
    } catch {
      return "undefined";
    }
  };

  return (
    <>
      <div onScroll={handleScroll} style={{ overflowY: "auto" }}>
        <DataTable
          rows={rows}
          columns={columns}
          handleDragEnd={handleDragEnd}
          key={getKey()}
        />
        {loading && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <span>Loading...</span>
          </div>
        )}
      </div>
      {openModal && (
        <ProductDetailsDrawer
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}
