import React, {useState} from 'react'

const ContactCard = (props) => {
    
    let [showAge, setShowAge]=useState(false);
    
    return (
      <div className="contact-card">
        <img src={props.avatarURL} alt="profile"/>
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <button onClick={()=>setShowAge(!showAge)}>Show/Remove Age</button>
          {showAge && <p>Age: {props.age}</p>}        
        </div>    
      </div>

      );
}
 
export default ContactCard;