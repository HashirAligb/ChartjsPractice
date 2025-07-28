import React, { useEffect } from 'react';  
import {useState} from 'react'; 
import AddFirms from './AddFirms';  
import FirmsChart from './FirmsChart';
import './App.css';

function FirmManager(){ 
    const [firms, setFirms] = useState([]);   
    useEffect(() => {  
         fetch('http://localhost:5001/api/firms')
         .then(response => response.json()) 
         .then(data =>  {
            setFirms(data); 
            console.log("Data from Flask: ", data);  
        }) 
        .catch(error => { 
            console.error("Error fetching data: ", error); 
        });  
        }, []); 



    const addFirmToList = (newFirm) => { 
        setFirms([...firms,newFirm]); 
        console.log("Main file recieved: ", newFirm)  
    };

    const deleteFirm = (id) => {  
        setFirms(firms.filter(firm => firm.id !== id));   
        console.log("Deleted Firm with id: ", id); 
    };
     

    return( 
        <div className="dashboard-container"> 
            <div className="dashboard-header">
                <h1 className="dashboard-title">Law Firm Manager</h1>   
                <p className="firm-count">We have {firms.length} firms!</p>   
            </div>
             {/* ADD THIS - Display all firms */}
             <div className="firms-list">
    <h2>All Firms</h2>
    <ul>
        {firms.map(firm => (
            <li key={firm.id} className="firm-item">
                <div className="firm-info">
                    <div className="firm-name">{firm.name} - {firm.borough}</div>
                    <div className="firm-details">Contact: {firm.contact} | Phone: {firm.phone}</div>
                </div>
                <button className="delete-btn" onClick={() => deleteFirm(firm.id)}>Delete</button>
            </li>
        ))}
    </ul>
</div>
            <FirmsChart firms={firms} key={firms.length} />
            <AddFirms onAddFirm={addFirmToList} /> 
        </div>
   ); 
};  

function App(){  
    return(
        <div> 
            <FirmManager/>
        </div> 
    ); 
}; 


export default App  
