
import React, { useEffect ,useState} from "react"

import { Link } from "react-router-dom"
import { Row, Col, Button, Input, Label, Card } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Email Sidebar
import EmailSideBar from "./email-sidebar"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"

const EmailInbox = () => {
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
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="MAC ADDRESSES" breadcrumbItem=" CLIENT-MAC" />
          <div className="table-responsive">
        <table className="table table-bordered" style={{alignItems:"center",border:"3px solid black"}}>
          <thead>
            <tr style={{alignItems:"center",border:"3px solid black"}}>
              <th style={{alignItems:"center",border:"3px solid black"}}>ADDRESS_TYPE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>AP_MAC</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>CLIENT_TYPE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>AUTH_STATUS</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>AUTH_TYPE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>EXPIRES</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>GUEST_ACCESS_TYPE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>INTERFACE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>IP</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>MANUFACTURER</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>NAME</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>OS</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>PORTAL_MODE</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>TX_BYTES</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>RX_BYTES</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData5 && deviceData5.map((task)=>{
            return(
                
                <tr  style={{alignItems:"center",border:"3px solid black"}}>
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.address_type}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.ap_mac }</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.client_type}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.auth_status}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.auth_type}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.expires}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.guest_access_type}</td>
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.interface}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.ip}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.manufacturer}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.name}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.os}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.portal_mode}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.tx_bytes}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.rx_bytes}</td>
                   
                    
                </tr>
            )
        }  
        )}
            
          </tbody>
          <tfoot>
  <tr>
    <td>Total Clients_mac: {deviceData5.length}</td>
  </tr>
</tfoot>
        </table>
      </div>
         
         
      </div>
    </React.Fragment>
  )
}

export default EmailInbox
