import './Our_Team.css'
import photo from '../asset/photo.jpg'


export default function Our_Team() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`
  return (
    <>
      <div className="ourteam">
      
      <div className="ourteamTitles">
        <span className="ourteamTitleLg">Our Team</span>
      </div>
        <img className="ourteamImg" src={photo} alt="" />
       </div>

       <section class="section-white">
 
 {/* <div class="container"> */}

     <div class="row">
    
                 <div class="col-md-12 text-center">

                       <h2 class="section-title">The Team Behind MindCare</h2>

                       <p class="section-subtitle">{message}</p>
                       
                 </div> 
          
         <div class="col-sm-6 col-md-4">

               <div class="team-item">
               
                   <img src="" class="team-img" alt="pic" />                   
                   <h3>Yoseph yos</h3>            
                   <div class="team-info"><p>Team Leader</p></div>
                   <p>Yoseph is a dedicated full stack web developer.</p>
               
                  
               
             </div>
         </div> 
           
         <div class="col-sm-6 col-md-4">

               <div class="team-item">
               
                   <img src="" class="team-img" alt="pic" />
                  
                   <h3>Inas Wendem</h3>
                   
                   <div class="team-info"><p>Front-end Developer</p></div>

                   <p>I have nothing to say about my self.</p>
               
                  
               </div>

         </div> 
         <div class="col-sm-6 col-md-4">

               <div class="team-item">
               
                   <img src="" class="team-img" alt="pic" />
                  
                   <h3>Nebiyou Elias </h3>
                   
                   <div class="team-info"><p>Lead in other aspects of his life</p></div>
s
                   <p>Nebil is an aspiring Front-end Developer.</p>
               
                   
               </div>

         </div> 
     
     </div> 
 
 {/* </div>  */}

 </section>

    </>
    )
    }