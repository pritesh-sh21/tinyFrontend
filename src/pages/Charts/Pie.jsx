import React, { useEffect, useState } from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => {
  const [pied, setpiedata] = useState([]);
  const [count, setCount] = useState(0);
  var piedata = [];
  
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/session/all');
        const data = await response.json();
        // console.log(data);
        const sessInfo = await Promise.all(data.map(async x => {
          
          const response = await fetch(`http://localhost:9000/api/session_details/${x}`);
          const data = await response.json();
          return data;
        }));

        const promises = sessInfo.map(async (session) => {
          const { category, attendees } = session;
          const benefitedPeople = await Promise.all(attendees.map(async (x) => {
            const response = await fetch(`http://localhost:9000/api/people/${x}`);
            const data = await response.json();
            return data;
          }));
          const benefitedCount = benefitedPeople.filter((person) => person.benefited === 'Yes').length;
  
          // Find the index of the category in piedata array
          const index = piedata.findIndex(obj => obj.x === category);
  
          if (index === -1) {
            // If category not found, add a new object to piedata array
            piedata.push({ x: category, y: benefitedCount, text: benefitedCount + '%' });
          } else {
            // If category found, update the count in piedata array
            piedata[index].y += benefitedCount;
            piedata[index].text = piedata[index].y + '%';
          }
  
          return benefitedCount;
        });
  
        const benefitedCounts = await Promise.all(promises);
        const totalCount = benefitedCounts.reduce((total, count) => total + count, 0);
        const updatedPiedata = piedata.map((val) => {
          const per=parseInt((val.y / totalCount) * 100)
          return {
            x: val.x,
            y: per,
            text: per+ '%',
          };
        });
        setCount(totalCount); // Update the count state with the total count
        setpiedata(updatedPiedata); // Update the piedata state
          

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
     console.log("test",pied)
    fetchdata();
  }, []); // Empty dependency array to run effect only once
  
  return (
    <>

      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Pie" title="Total participation of people benefited from different sessions" />
        <div className="w-full">
          <PieChart id="chart-pie" data={pied} legendVisiblity height="full" />
        </div>

      </div>
    </>)
};

export default Pie;
