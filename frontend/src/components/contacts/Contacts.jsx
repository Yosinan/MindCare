import './Contacts.css'
import photo from './photo.jpg'


export default function Contacts() {
  return (
    <>
      <div className="contacts">
      
      <div className="contactsTitles">
        <span className="contactsTitleLg">Contacts</span>
      </div>
        <img className="contactsImg" src={photo} alt="" />
         <h2> Get in touch and let us know how we can help</h2>
         
    </div>
       <div className='contactsAdress'>
       
            <div className="contactInfo">
                <h4>Address:</h4>
                <div className='h'> Block 54,in front of Astemariwoch Lounge</div >
                <h4>Working days:  </h4>
                <div className='h'>Mon-Fri</div>
                <h4>Phones:</h4>
                <div className='h'>+251-913402431</div>
                <div className='h'>+251-973416615</div>
                <h4 >E-mail:</h4>
                <div className='e'>lemma.edea@aastu.edu.et</div>
                <div className='e'>debebe.tilaye@aastu.edu.et</div>
            </div>
       </div>
    </>
   
  )
}

