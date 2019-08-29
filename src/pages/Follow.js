import React from "react";
import List from "../components/List.js"
export default class Follow extends React.Component{
   
    constructor(){
        super();
        this.state={
            data:""
        }
    }

    componentDidMount(){
        
        Follow.axios({
            url:"/mock/follow"
        }).then(
            res=>this.setState({data:res.data.data})
        )
    }    
    render(){
        return(
            <div className="Follow">
                {this.state.data && <List data={this.state.data}></List>}
                
            </div>
        )
    }
}