import React, { useEffect ,useState} from "react"

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { isEmpty, map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard"

import "../../assets/scss/tasks.scss"
import { getTasks } from "../../store/tasks/actions"

const TasksKanban = props => {
  const [deviceData1, setDeviceData1] = useState([])
  const apiUrl = 'http://localhost:4000/api/data'; // Assuming your React app is served from the same domain as your backend
  useEffect(() => {

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(res => {
      console.log('Response:', res.deviceData1.data);
      setDeviceData1(res.deviceData1.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);


  return (
    <React.Fragment>
      <div className="page-content">
         
          <Breadcrumbs title="Tasks" breadcrumbItem="CLIENTS" />
          <div className="table-responsive">
        <table className="table table-bordered" style={{alignItems:"center",border:"3px solid black"}}>
          <thead>
            <tr style={{alignItems:"center",border:"3px solid black"}}>
              <th style={{alignItems:"center",border:"3px solid black"}}>MAC</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>AP_MAC</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>IP</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>MANUFACTURER</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>OS</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>NAME</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>BAND</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>ID</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>RSSI</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>TX_BYTES</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>RX_BYTES</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>SNR</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>SSID</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>DEVICE_MAC</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData1 && deviceData1.map((task)=>{
            return(
                
                <tr  style={{alignItems:"center",border:"3px solid black"}}>
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.mac}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.ap_mac }</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.ip}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.manufacturer}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.os}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.name}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.band}</td>
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.id}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.rssi}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.tx_bytes}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.rx_bytes}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.snr}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.ssid}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.device_mac}</td>
                </tr>
            )
        }  
        )}
            
          </tbody>
          <tfoot>
  <tr>
    <td colSpan="9">Total Clients: {deviceData1.length}</td>
  </tr>
</tfoot>
        </table>
       
      </div>
         
         
      </div>
    </React.Fragment>
  )
}


export default TasksKanban



