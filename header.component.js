import { Link } from "react-router-dom";
import './header.component.css';
export function HeaderComponents(){
    return(
        <div className="row">
            <div className="col-2">
                <img src={require('../../assets/images/rem_logo.jpg')}className=' image'></img>
            </div>
            <div className="col-8">
                <div className='menu mt-1'>
                    <label>
                        <Link to="/Home" className="menu-item">Home</Link>
                    </label>
                    <label>
                        <Link to="/Properties" className="menu-item">Properties</Link>
                    </label>
                    <label>
                        <Link to="/About" className="menu-item">About us</Link>
                    </label>
                    <label>
                        <Link to="/Contact" className="menu-item">Contact us</Link>
                    </label>
                </div>
            </div>
            <div className="col-2">
                <Link to = "/Login" type='button' className='btn btn-outline-primary' value="Registration">Login</Link>
                <Link to = "/Registration" type='button' className='btn btn-outline-danger' value="login">Registration</Link>
            </div>
        </div>
    );
}
<Link to = "/Registration"></Link>