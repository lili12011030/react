import React from "react";
import {Route,Redirect} from "react-router-dom"
import {connect} from "react-redux";

// class Apth extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             hasApth:false,
//             Apth:false,
//             data:{}
//         };
//         fetch(
//             "/data/user.json"
//         ).then(
//             res=>res.json()
//         ).then(
//             res=>this.setState({Apth:res.apth,data:res.data,hasApth:true})
//         )
//     }
//     render(){
//   if(!this.state.hasApth) return null
//         // if(!this.state.Apth) return <Route component={Login}/>
//         // if(this.state.Apth) return <Route component={user}/>

//         let {component:Component,...rest} =this.props;
//         return (
//             <Route {...rest} render={
//                 (rest)=>(
//                     this.state.Apth?
//                     <Component {...rest} data={this.state.data}/>:<Redirect to="/login"/>
//                 )
//             }></Route>
//         )
//     }
// }
const Apth =({component:Component,user,...rest})=>(
    <Route {...rest} render={(rest)=>(
        user.err===0 ?
        <Component {...rest} data={user.data}/>:
        <Redirect to="/login"/>
    )}></Route>
); 


const propsState=(state)=>({
    user:state.user
})
const propsDispath=()=>({

})


export default connect(propsState,propsDispath)(Apth);