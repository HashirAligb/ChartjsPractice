        import React from 'react'; 
        import {useState} from 'react';  

        function AddFirms({onAddFirm}){  

            const [name, setName] = useState(''); 
            const [borough, setBorough] = useState(''); 
            const [contact, setContact] = useState(''); 
            const [phone, setPhone] = useState('');   

            const HandleSubmit = () => {  
                const newFirm = { 
                    id : Date.now(), 
                    name : name, 
                    borough : borough, 
                    contact : contact,  
                    phone : phone 
                }; 

                fetch('http://localhost:5001/api/firms', {
                    method: 'POST', 
                    headers : { 
                        'Content-Type': 'application/json',

                    }, 
                    body : JSON.stringify(newFirm)

                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    onAddFirm(newFirm);  // Update React state after successful save
                })
                .catch(error => {
                    console.error('Error:', error);
                });




                setName(''); 
                setBorough(''); 
                setContact('');
                setPhone('');
                console.log("Firm Added successfully");


            }; 

            return(   
                <div>  
                    <h1>Add New Firm </h1> 
                    <form>   
                        <input   
                            type = "text"  
                            placeholder = "Firm Name" 
                            value = {name} 
                            onChange = {(e) => setName(e.target.value)} 
                            /> 
                        <br/>    

                        <input  
                            type = "text" 
                            placeholder= "borough"  
                            value = {borough} 
                            onChange= {(e) => setBorough(e.target.value)}
                        /> 

                        <br/> 
                        <input 
                            type= "text" 
                            placeholder= "contact"
                            value = {contact} 
                            onChange= {(e) => setContact(e.target.value)} 
                        /> 
                        <br/>  

                        <input              
                            type = "text" 
                            placeholder= "phone"  
                            value = {phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                        />
                    </form> 
                    <br/>  
                    
                    <button type = "button" onClick = {HandleSubmit}>  
                        Add Firm  
                    </button>
                

                </div>
            ); 
        } 
        export default AddFirms; 


