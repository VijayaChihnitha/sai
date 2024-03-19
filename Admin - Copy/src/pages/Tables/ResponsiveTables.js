import React, { useEffect,useState  } from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Alarms = props => {
  const [deviceData8, setDeviceData8] = useState([])
  const apiUrl = 'http://localhost:4000/api/data8'; // Assuming your React app is served from the same domain as your backend
  useEffect(() => {

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(res => {
      console.log('Response:', res.deviceData8.data);
      setDeviceData8(res.deviceData8.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);

  return (
    <React.Fragment>
      <div className="page-content">
      <Breadcrumbs title="Networking" breadcrumbItem="ALARMS" />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              {/* <th>IP</th>
              <th>NETWORK</th>
              <th>MESSAGE</th>
              <th>NAME</th>
              <th>SEVERITY</th>
              <th>SOURCR_TYPE</th>
              <th>STATUS</th>
              <th>MAC</th>
              <th>SOURCE</th>
              <th>TIME_RAISED</th>
              <th>TIME_CLEARED</th> 
              <th>DURATION</th>
              <th>ID</th>
              <th>CODE</th>
              <th>SITES</th>
              <th>ACKNOWLEDGED_BY</th> */}
              
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData8 && deviceData8.map((task)=>{
            return(
                
                <tr >
                    
                    {/* <td>{task.ip}</td>
                    <td>{task.source_type }</td>
                    <td>{task.id}</td>
                    <td>{task.network}</td>
                    <td>{task.message}</td>
                    <td>{task.name}</td>
                    <td>{task.time_rised}</td>
                    <td>{task.time_cleared}</td>
                    <td>{task.mac}</td>
                    <td>{task.source}</td>
                    <td>{task.severity}</td>
                    <td>{task.duration}</td>
                    <td>{task.code}</td>
                    <td>{task.status}</td>
                    <td>{task.acknowlwdged_by}</td>
                    <td>{task.sites}</td> */}
                </tr>
            )
        }  
        )}
            
          </tbody>
        </table>
      </div>
      
       
          
      </div>

         
    </React.Fragment>
  )
}

export default Alarms
