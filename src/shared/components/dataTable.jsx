import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DataTable = ({ rows, columns, handleDragEnd }) => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const CustomCheckboxStyles = {
    "& .MuiCheckbox-root": {
      padding: 0,
      "& .MuiSvgIcon-root": {
        fontSize: "14px",
        width: "14px",
        height: "14px",
      },
    },
  };

  const SortableColumn = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id,
      });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      cursor: "grab",
      padding: "8px",
    };

    return (
      <th ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {children}
      </th>
    );
  };
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Paper style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns?.map((column) => ({
              ...column,
              headerName: (
                <SortableColumn key={column?.id} id={column?.id}>
                  {column?.headerName}
                </SortableColumn>
              ),
              renderHeader: column?.renderHeader
                ? (header) => {
                    return (
                      <SortableColumn key={column?.id} id={column?.id}>
                        {column?.renderHeader?.(header)}
                      </SortableColumn>
                    );
                  }
                : undefined,
            }))}
            pagination={false}
            hideFooter
            checkboxSelection
            columnHeaderHeight={28}
            rowHeight={34}
            sx={{
              ...CustomCheckboxStyles,
              border: 0,
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#F1EFFC",
                color: "#404040",
                fontSize: 10,
                fontWeight: "bold",
                lineHeight: "28px",
                height: 28,
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: "#F8F8F8",
              },
              "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: "#FFFFFF",
              },
              "& .MuiDataGrid-row--borderBottom": {
                backgroundColor: "#F1EFFC",
              },
              "& .center-header": {
                textAlign: "center",
              },
            }}
          />
        </Paper>
      </DndContext>
    </>
  );
};

export default DataTable;
