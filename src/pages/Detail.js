import React from "react";
import querystring from "query-string";
import Head from "../components/header" 
export default class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            head:"detail"
        }
    }


    render(){
        return(
            <div className="Detail">
                <Head data={this.state.head}></Head>
                
            </div>
        )
    }
    
}