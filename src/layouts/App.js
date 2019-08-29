import React from "react";

import Home from "../pages/Home";
import Follow from "../pages/Follow";
import User from "../pages/User";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail.js";

import Auth from "../gulp/Apth";

import { Route, Switch, Redirect } from 'react-router-dom';

import Footer from "./Footer.js";
import Loading from "../components/loading/Loading"

import {connect} from "react-redux";

import {VIEW_FOOT} from "../store/types"

 class App extends React.Component{

      componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname;
        this.checkPath(path)
      }
      componentDidMount(){
        let path = this.props.location.pathname;   
        this.checkPath(path)
      }
      checkPath = (path) => {
        let {viewFoot,}=this.props;
        if (/home|follow|column/.test(path)){ 
          viewFoot(true)
        }
        if (/login|reg|detail/.test(path)){
          
          viewFoot(false)
        }
        if (/user/.test(path)){
          viewFoot(true)
        }
      };
 render(){
  let {bFoot,bLoading} =this.props;
        return (
            <div className="App">
                {bLoading&&<Loading></Loading>}
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/follow" component={Follow}></Route>
                    <Auth path="/user" component={User}></Auth>
                    {/* <Route path="/user" component={User}></Route> */}
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/reg" component={Reg}></Route>
                    
                    <Redirect from="/" to="/home"></Redirect>
                    <Route component={Error}/>
                </Switch>
                {bFoot&&<Footer/>}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  bFoot:state.bFoot,
  bLoading:state.bLoading
})
const mapDispatchToProps=(dispatch)=>({
  viewFoot:(bl)=>dispatch({type:VIEW_FOOT,payload:bl})
})

export default connect(mapStateToProps,mapDispatchToProps)(App)





