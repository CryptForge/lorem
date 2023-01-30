import { NavLink } from "react-router-dom";
import { User } from "../types";
import "./Navigation.css";

type Properties = {
    user?: User
}

export default function Navigation(props: Properties) {
    return (
        <div className="navigation">
            <h1>Lorem</h1>
            <div className="profile-img-container">
                <img src={props.user?.picture} alt="User profile picture" />
            </div>
            <p>{props.user?.username}</p>
            <nav>
                <NavLink to="/" >Dashboard</NavLink>
                <NavLink to="/tasks" >Tasks</NavLink>
                <NavLink to="/websites" >Websites</NavLink>
                {/* <NavLink to="/other" >Other</NavLink> */}
            </nav>
        </div>
    )
}