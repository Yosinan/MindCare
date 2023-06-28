import { Link } from 'react-router-dom';
import './Topbar.css'

export default function Topbar() {
  const user=true;
  return (
   
      <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
         
        </ul>
      </div>
      
    </div>
    
  )
}
