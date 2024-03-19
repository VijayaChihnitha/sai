import React, { useState ,useEffect} from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const TasksCreate = () => {

  const [deviceData4, setDeviceData4] = useState([])
  const apiUrl = 'http://localhost:4000/api/data4'; // Assuming your React app is served from the same domain as your backend
  useEffect(() => {

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(res => {
      console.log('Response:', res.deviceData4.data);
      setDeviceData4(res.deviceData4.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);

  return (
    <>
      <div className="page-content">
        
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="STATISTICS" />
          <div className="table-responsive">
        <table className="table table-bordered" style={{alignItems:"center",border:"3px solid black"}}>
          <thead>
            <tr style={{alignItems:"center",border:"3px solid black"}}>
              {/* <th>NAME</th> */}
              <th style={{alignItems:"center",border:"3px solid black"}}>BAND</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>ID</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>BSSID</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>CHANNEL</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>POWER</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>QUALITY</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>RADIO_STATE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>RX_BPS</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>TX_BPS</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>UTILIZATION</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>NUM_CLIENTS</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>NOISE_FLOOR</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>RX_BYTES</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>TX_BYTES</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>AIRTIME</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData4 && deviceData4.map((task)=>{
            return(
                
                <tr >
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.band}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.id}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.bssid}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.channel}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.power}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.quality}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.radio_state}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.rx_bps}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.tx_bps}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.utilization}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.num_clients}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.noise_floor}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.rx_bytes}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.tx_bytes}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.airtime}</td>
                    
                </tr>
            )
        }  
        )}
            
          </tbody>
          <tfoot>
  <tr>
    <td>SATATISTICS: {deviceData4.length}</td>
  </tr>
</tfoot>
        </table>
      </div>

          
      </div>
    </>
  )
}

export default TasksCreate
