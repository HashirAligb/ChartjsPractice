import React from 'react';  
import {useState} from 'react'; 
import AddFirms from './AddFirms';  
import FirmsChart from './FirmsChart';


function FirmManager(){ 
    const [firms, setFirms] = useState( 
        [
            { id: 1, name: "Legal Aid Society", borough: "Brooklyn", contact: "Sarah Johnson", phone: "555-0123" },
            { id: 2, name: "Community Legal", borough: "Manhattan", contact: "Mike Chen", phone: "555-0456" },
            { id: 3, name: "Justice Partners", borough: "Queens", contact: "Lisa Rodriguez", phone: "555-0789" }
          ]
        );  

    const addFirmToList = (newFirm) => { 
        setFirms([...firms,newFirm]); 
        console.log("Main file recieved: ", newFirm)  
    };

    const deleteFirm = (id) => {  
        setFirms(firms.filter(firm => firm.id !== id));   
        console.log("Deleted Firm with id: ", id); 
    };
     

    return( 
        <div> 
            <h1>Law Firm Manager</h1>   
            <p1> We have {firms.length} firms! </p1>   
             {/* ADD THIS - Display all firms */}
        <ul>
            {firms.map(firm => (
                <li key={firm.id}>
                    <strong>{firm.name}</strong> - {firm.borough}
                    <br />Contact: {firm.contact} | Phone: {firm.phone} 
                    <button onClick={() => deleteFirm(firm.id)}> Delete </button>
                </li>
            ))}
        </ul> 
            <FirmsChart firms={firms} />
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
