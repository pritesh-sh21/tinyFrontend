import React from "react";

import { peopleGrid, pieChartData,peopleData } from "../data/dummy";
import { Button, ChartsHeader, Pie as PieChart } from "../components";
// import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import {} from "../"

//bar chart

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../data/dummy";

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
} from "@syncfusion/ej2-react-grids";

import { sessionsData, contextMenuItems } from "../data/dummy";
import { Header } from "../components";

import {  LineChart } from '../components';

// import { useStateContext } from "../contexts/ContextProvider";

const SessionDetails = () => {
  const { currentColor, currentMode } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl overflow-scroll">
        <Header category="Page" title="Session Details" />
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Line" title="Inflation Rate" />
            <div className="w-full">
              <LineChart />
            </div>
          </div>

          {/* //bar graph  */}
          <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader
              category="People Beneifeted"
              title="People Affected in Different Aspects"
            />
            <div className=" w-full">
              <ChartComponent
                id="charts"
                width="300px" // Set the desired width
                height="300px" // Set the desired height
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0.2 } }}
                tooltip={{ enable: true }}
                background={currentMode === "Dark" ? "#33373E" : "#fff"}
                legendSettings={{ background: "white" }}
              >
                <Inject
                  services={[
                    ColumnSeries,
                    Legend,
                    Tooltip,
                    Category,
                    DataLabel,
                  ]}
                />
                <SeriesCollectionDirective>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  {barCustomSeries.map((item, index) => (
                    <SeriesDirective key={index} {...item} />
                  ))}
                </SeriesCollectionDirective>
              </ChartComponent>
            </div>
          </div>
        </div>

        {/* //People  */}
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Page" title="Peoples" />
          <div style={{overflow:'scroll'}}>
          <GridComponent
            id="gridcomp"
            dataSource={peopleData}
            allowPaging
            allowSorting
            allowExcelExport
            allowPdfExport
            contextMenuItems={contextMenuItems}
            editSettings={editing}
            
          >
            <ColumnsDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {peopleGrid.map((item, index) => (
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
              ]}
            />
          </GridComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionDetails;
