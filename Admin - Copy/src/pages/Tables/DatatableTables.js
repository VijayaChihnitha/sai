import React, { useEffect ,useState} from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

  const Alarmshistory = props => {
    const [deviceData2, setDeviceData2] = useState([])
    const apiUrl = 'http://localhost:4000/api/data2'; // Assuming your React app is served from the same domain as your backend
    useEffect(() => {
  
      fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(res => {
        console.log('Response:', res.deviceData2.data);
        setDeviceData2(res.deviceData2.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  
    return (
      <React.Fragment>
        <div className="page-content" >
        <Breadcrumbs title="Networking" breadcrumbItem="Alarms History" />
        <div className="table-responsive">
          <table className="table table-bordered" style={{alignItems:"center",border:"3px solid black"}}>
            <thead>
              <tr style={{alignItems:"center",border:"3px solid black"}}>
                <th style={{alignItems:"center",border:"3px solid black"}}>IP</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>NETWORK</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>MESSAGE</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>NAME</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>SEVERITY</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>SOURCR_TYPE</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>STATUS</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>MAC</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>SOURCE</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>TIME_RAISED</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>TIME_CLEARED</th> 
                <th style={{alignItems:"center",border:"3px solid black"}}>DURATION</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>ID</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>CODE</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>SITES</th>
                <th style={{alignItems:"center",border:"3px solid black"}}>ACKNOWLEDGED_BY</th>
                
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
            {deviceData2 && deviceData2.map((task)=>{
              return(
                  
                  <tr  style={{alignItems:"center",border:"3px solid black"}}>
                      
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.ip}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.network }</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.message}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.name}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.severity}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.source_type}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.status}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.mac}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.time_rised}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.time_cleared}</td>
                      
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.duration}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.id}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.code}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.status}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.sites}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.acknowlwdged_by}</td>
                      <td style={{alignItems:"center",border:"3px solid black"}}>{task.sites}</td>
                  </tr>
              )
          }  
          )}
              
            </tbody>
            <tfoot>
  <tr>
    <td>Alarms history: {deviceData2.length}</td>
  </tr>
</tfoot>
          </table>
        </div>
        
         
            
        </div>
  
           
      </React.Fragment>
    )
  }
  
  export default Alarmshistory



