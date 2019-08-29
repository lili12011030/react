import React from 'react';
import TitlebarGridList from "./Listzu"


export default class List extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:""
    };
    
    this.state.data=this.props.data;
    
  } 
  render(){  
  
  return (
    <div >
      {this.state.data&&<TitlebarGridList data={this.state.data}/>}
    </div>
  );
  }
}

