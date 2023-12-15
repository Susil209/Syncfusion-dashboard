import React from "react";
import { Header } from "../components";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  VirtualScroll,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 md:p-10 bg-white rounded-3xl">
      {/* Header of the page */}
      <Header category="Page" title="Orders" />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting

      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            VirtualScroll
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
