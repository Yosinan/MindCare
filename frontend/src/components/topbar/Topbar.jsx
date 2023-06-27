import { Link } from 'react-router-dom';
import './Topbar.css'

export default function Topbar() {
  const user=true;
  return (
    <div>
      <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/"> 
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {/* {user && <li className="topListItem">LOGOUT</li>} */}
        </ul>
      </div>
      <div className="topRight">
         {user ? (
          <Link className="link" to="/settings"> 
            <img
              className="topImg"
              src="https://th.bing.com/th/id/R.39335b1ff42965c05df208e214de5391?rik=tvZEmSjVY%2bg9ag&pid=ImgRaw&r=0" alt=''
            />
          </Link>
         ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )} 
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    </div>
  )
}
