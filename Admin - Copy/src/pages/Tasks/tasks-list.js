import React, { useEffect,useState  } from "react"

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { isEmpty, map, size } from "lodash"
import { Link, withRouter } from "react-router-dom"
import classNames from "classnames"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import ReactApexChart from "react-apexcharts"

import { getTasks } from "../../store/tasks/actions"
import { options, series, statusClasses } from "../../common/data/tasks"
import axios from "axios"

const TasksList = (props) => {
  console.log("dsfdfd")
  const [deviceData, setDeviceData] = useState([])
  const apiUrl = 'http://localhost:4000/api/data1'; // Assuming your React app is served from the same domain as your backend
  useEffect(() => {

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(res => {
      console.log('Response:', res.deviceData.data);
      setDeviceData(res.deviceData.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);

  return(
    <div className="page-content">
      <Breadcrumbs title="Tasks" breadcrumbItem="DEVICES" />
      <div className="table-responsive">
        <table className="table table-bordered" style={{alignItems:"center",border:"5px solid black"}}>
          <thead>
            <tr style={{alignItems:"center",border:"3px solid black"}}>
              <th style={{alignItems:"center",border:"3px solid black"}}>COUNTRY</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>NAME</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>IP</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>MSN</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>SOFTWARE VERSION</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>STATUS</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>MAC</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>MODE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>STATUS_TIME</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData && deviceData.map((task)=>{
            return(
                
                <tr style={{alignItems:"center",border:"5px solid black"}} >
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.country}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.name}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.ip}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.msn}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.software_version}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.status}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.mac}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.mode}</td>
                    
                   
                    <td>{task.status_time}</td>
                </tr>
            )
        }  
        )}
            
          </tbody>
          <tfoot>
  <tr>
    <td colSpan="9">Total Devices: {deviceData.length}</td>
  </tr>
</tfoot>
        </table>
      </div>
       

    </div>
  )
}
export default TasksList


// const TasksList = (props) => {
//   // console.log("dsfdfd")
//   const [deviceData, setDeviceData] = useState([])
//   const apiUrl = 'http://localhost:4000/api/data1'; // Assuming your React app is served from the same domain as your backend
//   useEffect(() => {

//     fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(res => {
//       console.log('Response:', res.deviceData.data);
//       setDeviceData(res.deviceData.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }, []);

//   return(
//     <div className="page-content">
//       <Breadcrumbs title="Tasks" breadcrumbItem="Task List" />
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>COUNTRY</th>
//               <th>NAME</th>
//               <th>IP</th>
//               <th>MSN</th>
//               <th>SOFTWARE VERSION</th>
//               <th>STATUS</th>
//               <th>MAC</th>
//               <th>MODE</th>
//               <th>STATUS_TIME</th>
//               {/* Add more table headers as needed */}
//             </tr>
//           </thead>
//           <tbody>
//           {deviceData && deviceData.map((task,index)=>{
//             return(
                
//                 <tr >
                    
//                     <td>{task.country}</td>
//                     <td>{task.name}</td>
//                     <td>{task.ip}</td>
//                     <td>{task.msn}</td>
//                     <td>{task.software_version}</td>
//                     <td>{task.mac}</td>
//                     <td>{task.mode}</td>  
//                     <td>{task.status}</td>
//                     <td>{task.status_time}</td>
//                 </tr>
//             )
//         }  
//         )}
            
//           </tbody>
//         </table>
//       </div>
       

//     </div>
//   )
// }
// export default TasksList;

