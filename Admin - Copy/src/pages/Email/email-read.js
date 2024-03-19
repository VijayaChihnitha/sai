import React, { useEffect ,useState} from "react"
import { Link } from "react-router-dom"
import {  Row, Col, Card, CardBody } from "reactstrap"

//Import Image
// import avatar2 from "../../assets/images/users/avatar-2.jpg"
// import img3 from "../../assets/images/small/img-3.jpg"
// import img4 from "../../assets/images/small/img-4.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Email Sidebar
import EmailSideBar from "./email-sidebar"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"
const EmailRead = (props) => {
  const [deviceData6, setDeviceData6] = useState([])
  const apiUrl = 'http://localhost:4000/api/data6'; // Assuming your React app is served from the same domain as your backend
  useEffect(() => {

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(res => {
      console.log('Response:', res.deviceData6.data);
      setDeviceData6(res.deviceData6.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);

  return (
    <React.Fragment>
    <div className="page-content">
    <Breadcrumbs title="MAC ADDRESSES" breadcrumbItem="MAC" />
    <div className="table-responsive">
        <table className="table table-bordered" style={{alignItems:"center",border:"3px solid black"}}>
          <thead>
            <tr style={{alignItems:"center",border:"3px solid black"}}>
              <th style={{alignItems:"center",border:"3px solid black"}}>COUNTRY</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>MAC</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>DESCRIPTION</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>NAME</th>
              {/* <th>IPV6</th> */}
              <th style={{alignItems:"center",border:"3px solid black"}}>IP</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>NETWORK</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>PRODUCT</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>MSN</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>SOFTWARE_VERSION</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>INACTIVE_SOFTWARE_VHERSION</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>LAST_REBOOT_REASON</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>HARDWARE_VERSION</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>REGISTRATION_DATA</th>
              <th style={{alignItems:"center",border:"3px solid black"}}>STATUS</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData6 && deviceData6.map((task)=>{
            return(
                
                <tr  style={{alignItems:"center",border:"3px solid black"}}>
                    
                   
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.country }</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.mac}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.description}</td>
                    {/* <td>{task.ipv6}</td> */}
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.name}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}} >{task.ip}</td>
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.network}</td>
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.product}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.msn}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.software_version}</td>
                    
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.inactive_software_version}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.last_reboot_reason}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.hardware_version}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.registration_data}</td>
                    <td style={{alignItems:"center",border:"3px solid black"}}>{task.status}</td>
                </tr>
            )
        }  
        )}
            
          </tbody>
          <tfoot>
  <tr>
    <td> MAC: {deviceData6.length}</td>
  </tr>
</tfoot>
        </table>
      </div>
    
   
    </div>
    </React.Fragment>


  )
}

export default EmailRead
