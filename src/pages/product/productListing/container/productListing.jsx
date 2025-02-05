import React, { useState } from "react";
import ListView from "./listView/listView";
import GridView from "./gridView/gridView";
import MenuBar from "./menuBar/menuBar";
import ProductDetails from "./productDetails/productDetails";

const ProductListing = () => {
  const [view, setView] = useState("list");

  return (
    <>
      <MenuBar onViewChange={setView} currentView={view} />
      {view === "list" && <ListView />}
      {view === "grid" && <GridView />}
      {view === "productListing" && <ProductDetails />}
    </>
  );
};

export default ProductListing;
