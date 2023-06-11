import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components";
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid, CommunityGrid, communityData } from '../data/dummy'; 4
import { sessions, sessionsGrid } from '../sessiondummy';

import { Header } from '../components';
import { useStateContext } from "../contexts/ContextProvider";
import { DataManager } from '@syncfusion/ej2-data';
import { isAuthenticated } from '../auth/helper/index';


const Session = () => {
    const { currentColor, currentMode } = useStateContext();
    const { id } = useParams();
    const [header, setHeader] = useState('');
    const [sessionList, setSessionList] = useState([]);
    // const [Userid,setUserid]=useState('');
    // console.log(Userid);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch(`http://localhost:9000/api/community/${id}`);
                const data1 = await response1.json();
                setHeader(data1.name);
                   
                const response2 = await fetch(`http://localhost:9000/api/session/${id}`);
                const data2 = await response2.json();
                // setUserid(auth.user._id);
                const Userid = isAuthenticated().user._id;
                // console.log(Userid);

                const postResponse = await fetch(`http://localhost:9000/api/sessions/${id}`, {
                    method: 'POST',
                    mode:'cors',
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Userid),
                    credentials:'include'
                    // mode: 'no-cors'
                });
                console.log(data2);
                setSessionList(data2)
                sessionList.push(data2)
                console.log(sessionList);
                console.log(sessions)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    let grid;
    const navigate = useNavigate();
    const rowSelected = () => {
        console.log("dnkk");
        if (grid) {
            /** Get the selected row indexes */
            const selectedrowindex = grid.getSelectedRowIndexes();
            /** Get the selected records. */
            const selectedrecords = grid.getSelectedRecords();
            // console.log(selectedrecords);
            // alert(selectedrowindex + " : " + JSON.stringify(selectedrecords));
            // const linkid=sessionList[selectedrowindex]._id;
            navigate(`/community/session_details/${selectedrecords[0]._id}`);
        }
    };

    const editing = { allowDeleting: true, allowEditing: true };
    return (
        <>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <div className='flex justify-between'>
                    <Header category={header} title="Sessions" />
                    <div className="mt-3" onClick={() => { }}>
                        <Link to={`/create_session/${id}`}>
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Create New Session"
                                borderRadius="10px"
                            />
                        </Link>
                    </div>
                </div>
                <div className='cursor-pointer'>

                    <GridComponent
                        id="gridcomp"
                        dataSource={sessionList}
                        allowPaging
                        allowSorting
                        allowExcelExport
                        allowPdfExport
                        contextMenuItems={contextMenuItems}
                        editSettings={editing}
                        rowSelected={rowSelected} ref={g => grid = g}
                    >
                        <ColumnsDirective>
                            {sessionsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                        </ColumnsDirective>

                        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
                    </GridComponent>
                </div>

            </div>
        </>
    );
};
export default Session;
// import React from 'react'

// const Session = () => {
//   return (
//     <div>Session</div>
//   )
// }

// export default Session
