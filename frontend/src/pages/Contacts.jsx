import { useState } from 'react'
import './Contacts.css'
import photo from '../asset/photo.jpg'



export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create an object with the inputted information
    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        alert('Your Message is sent Successfully!');
        // Clear the input fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        console.log('Failed to send data to the backend.');
      }
    } catch (error) {
      console.error('Error occurred while sending data:', error);
    }
  };
  

  const handleClear = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      <div className="contacts">
      
      <div className="contactsTitles">
        <span className="contactsTitleLg">Contacts</span>
      </div>
        <img className="contactsImg" src={photo} alt="" />
         <h2> Get In Touch & Let Us Know How We Can Help</h2>
         
    </div>
       <div className='contactsAdress'>
       
            <div className="contactInfo">
                <h4>Address:</h4>
                <div className='h'> Block 54,Infront of Astemariwoch Lounge</div >
                <h4>Working Days:  </h4>
                <div className='h'>Mon-Fri</div>
                <h4>Phones:</h4>
                <div className='h'>+251-913402431</div>
                <div className='h'>+251-973416615</div>
                <h4 >E-mail:</h4>
                <div className='e'>lemma.edea@aastu.edu.et</div>
                <div className='e'>debebe.tilaye@aastu.edu.et</div>
            </div>

            <div className="form">
                <h4>Miscellaneous Information:</h4>
                <div className="h">Email us with any questions or inquiries or use our contact data.</div>
              
               <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="phone">Phone</label> */}
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <div className="form-group">
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message"
            name="message"
            cols={50} rows={13}
            placeholder='text here'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required={true}
          ></textarea>
        </div>
        <div className="buttons">
          <button type="submit" onClick={handleSubmit}>Send</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
            </div>
       </div>
    </>
   
  )
}

