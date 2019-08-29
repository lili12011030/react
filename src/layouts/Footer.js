
import React from "react";
import  {NavLink} from "react-router-dom"
import "./Footer.scss"
import Homeicon from  "@material-ui/icons/Home";

export default class footer extends React.Component{
  render (){
    return (
      <div className="footerbox">
        <NavLink className="footerhome footerli" activeClassName="footeractive" to="/home">
          <Homeicon
            className="homeicon"
            color="action"
            fontSize={"large"}
          ></Homeicon>
          主页
        </NavLink>
        <NavLink className="footerfollow footerli" activeClassName="footeractive" to="/follow">
        <Homeicon
            className="homeicon"
            color="action"
            fontSize={"large"}
          ></Homeicon>
          关注
        
        </NavLink>
        <NavLink className="footeruser footerli" activeClassName="footeractive" to="/user">
        <Homeicon
            className="homeicon"
            color="action"
            fontSize={"large"}

          ></Homeicon>
          用户
        </NavLink>
      </div>
    )
  }
}

