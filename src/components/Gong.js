import { Grid } from 'antd-mobile';
import React from "react";
import "./Gong.css";



export default class GridExample extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }
    render(){
        let data=this.state.data.map((_val)=>({
            icon:_val.icon,
            text:_val.text,
            id:_val.id
        }))
        return(
            <div style={{paddingTop:"5px"}}>
                <Grid data={data}  onClick={_el => console.log(_el)} />
            </div>
        )
    }
}

