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

const CardTasks = props => {
  const [deviceData5, setDeviceData5] = useState([])
  const apiUrl = 'http://localhost:4000/api/data5'; // Assuming your React app is served from the same domain as your backend
  useEffect(() => {

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(res => {
      console.log('Response:', res.deviceData5.data);
      setDeviceData5(res.deviceData5.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);


  return (
    <React.Fragment>
      <div className="page-content">
         
          <Breadcrumbs title="Tasks" breadcrumbItem="MAC_ID" />
          <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              {/* <th>MAC</th>
              <th>AP_MAC</th>
              <th>IP</th>
              <th>MANUFACTURER</th>
              <th>OS</th>
              <th>NAME</th>
              <th>BAND</th>
              <th>ID</th>
              <th>RSSI</th>
              <th>TX_BYTES</th>
              <th>RX_BYTES</th>
              <th>SNR</th>
              <th>SSID</th>
              <th>DEVICE_MAC</th> */}
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData5 && deviceData5.map((task)=>{
            // return(
                
            //     <tr >
                    
            //         <td>{task.mac}</td>
            //         <td>{task.ap_mac }</td>
            //         <td>{task.ip}</td>
            //         <td>{task.manufacturer}</td>
            //         <td>{task.os}</td>
            //         <td>{task.name}</td>
            //         <td>{task.band}</td>
                    
            //         <td>{task.id}</td>
            //         <td>{task.rssi}</td>
            //         <td>{task.tx_bytes}</td>
            //         <td>{task.rx_bytes}</td>
            //         <td>{task.snr}</td>
            //         <td>{task.ssid}</td>
            //         <td>{task.device_mac}</td>
            //     </tr>
            // )
        }  
        )}
            
          </tbody>
        </table>
      </div>
         
         
      </div>
    </React.Fragment>
  )
}


export default CardTasks



