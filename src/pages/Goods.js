import React from "react";
import {Link,Route} from "react-router-dom";
import Detail from "./Detail"
import queryString from "query-string";
export default class Goods extends React.Component{
    
    render(){
        let pname=4;
        let {match,history,location} =this.props;
        return(
            <div className="Goods">
                <h3>goods</h3>
                
            </div>
        )
    }
}