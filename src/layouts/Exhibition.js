import React from "react";
import SegmentedControl from "../components/SegmentedControl";
import Gong from "../components/Gong"
import "./Exhibition.css"
export default class Exhibition extends React.Component{
    state ={
        data:""
    }

    componentWillMount(){
        fetch(
            "/mock/hot"
        ).then(
            res=>res.json()
        ).then(
            res=>{this.setState({data:res.data})}
        )
    }
    
    render(){
        return(
            <div className="Exhibition">
                <SegmentedControl></SegmentedControl>
                {this.state.data&&<Gong data={this.state.data}></Gong>}
            </div>
        )
    }
}