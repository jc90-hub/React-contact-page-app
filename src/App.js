import React, { useState,useEffect } from 'react';
import'./App.css';
import ContactCard from './ContactCard';

const App =() =>{
  const title = 'Hello React World !!!';
  const [contacts, setContacts]=useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setContacts(data.results)      
    })
  },[])  

  return(    
    <div>
      {contacts.map((contact, index)=>{
        return(
          <ContactCard key={index}          
          avatarURL={contact.picture.large}
          name={contact.name.first}
          email={contact.email}
          age={contact.dob.age}
          />
        )
      })}      
    </div>    
  )
}

export default App;
