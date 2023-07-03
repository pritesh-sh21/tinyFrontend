import React, { useEffect, useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries,barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
const Bar = () => {
  const { currentMode } = useStateContext();
  const [bardata,setbardata]=useState([]);
  const [barseries,setbarseries]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/community/all');
        const data = await response.json();
        data.sort((a, b) => b.sessions.length - a.sessions.length);
        const top4Communities = data.slice(0, 4);
        const rqrdata = await Promise.all(top4Communities.map(async (comm) => {
          const sessionInfo = await Promise.all(comm.sessions.map(async (id) => {
            const response = await fetch(`http://localhost:9000/api/session_details/${id}`);
            const sessionData = await response.json();
            return sessionData.category;
          }));
          const sessionCounts = sessionInfo.reduce((counts, category) => {
            counts[category] = (counts[category] || 0) + 1;
            return counts;
          }, {});
          const commdata = Object.entries(sessionCounts).map(([x, y]) => ({ x, y }));
          return {name:comm.name,commdata};
        }))
        // setbardata(rqrdata)
        const transformedData = rqrdata.reduce((result, community) => {
          community.commdata.forEach(({ x, y }) => {
            if (!result[x]) {
              result[x] = [];
            }
            result[x].push({ [community.name]: y });
          });
          return result;
        }, {});
        const transformedResult = Object.entries(transformedData).reduce((result, [x, values]) => {
          values.forEach((value) => {
            const [name, y] = Object.entries(value)[0];
            if (!result[x]) {
              result[x] = [];
            }
            result[x].push({ x: name, y });
          });
          return result;
        }, {});
        
        console.log(transformedResult);
        
        const transformedArray = Object.entries(transformedResult).map(([x, values]) => [x, values]);

        console.log("check",barCustomSeries)
        setbardata(transformedArray)
        const barCustom=transformedArray.map(x=>{
               return{
                dataSource: x[1],
                xName: "x",
                yName: "y",
                name: x[0],
                type: "Column",
                marker: {
                  dataLabel: {
                    visible: true,
                    position: "Top",
                    font: { fontWeight: "600", color: "#ffffff" },
                  },
                },
               }
        })
       
        console.log("barCustom",barCustom)
        setbarseries(barCustom);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(bardata);
    console.log("hello",barseries);
    fetchData();
  }, [])

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Total Number of Sessions in each Community" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective >
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {console.log("innnn",barseries)}
            {barseries.length > 0 && barseries.map((item, index) => <SeriesDirective columnWidth={0.8} key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;



/*

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';







*/
