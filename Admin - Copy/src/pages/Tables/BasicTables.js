import React, { useEffect,useState  } from "react"
import Breadcrumbs from "../../components/Common/Breadcrumb"

const BasicTable  = props => {
  const [deviceData3, setDeviceData3] = useState([])
  const apiUrl = 'http://localhost:4000/api/data3'; // Assuming your React app is served from the same domain as your backend
  useEffect(() => {

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(res => {
      console.log('Response:', res.deviceData3.data);
      setDeviceData3(res.deviceData3.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);

  return (
    <React.Fragment>
      <div className="page-content">
      <Breadcrumbs title="Networking" breadcrumbItem="ACCESS_CONTROL" />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>NAME</th>
              <th>ENABLE</th>
              <th>ACTION</th>
              <th>DIRECTION</th>
              <th>PROTO</th>
              <th>SPORT</th>
              <th>DPORT</th>
              <th>TYPE</th>
              <th>SRC_MAC</th>
              <th>SRC_MAC_MASK</th>
              <th>TIME_CLEARED</th> 
              <th>DEST_MAC</th>
              <th>DEST_MAC_MASK</th>
              <th>RULE_TYPE</th>
              <th>WLAN_TO_WLAN</th>
             
              
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
          {deviceData3 && deviceData3.map((task)=>{
            return(
                
                <tr >
                    
                    <td>{task.name}</td>
                    <td>{task.enable }</td>
                    <td>{task.action}</td>
                    <td>{task.direction}</td>
                    <td>{task.proto}</td>
                    <td>{task.dport}</td>
                    <td>{task.sport}</td>
                    <td>{task.type}</td>
                    <td>{task.src_mac}</td>
                    <td>{task.src_mac_mask}</td>
                    <td>{task.dest_mac}</td>
                    <td>{task.dest_mac_mask}</td>
                    <td>{task.rule_type}</td>
                    <td>{task.wlan_to_wlan}</td>
                    
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

export default BasicTable
