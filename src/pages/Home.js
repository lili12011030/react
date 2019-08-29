import React from "react";
import Head from "../components/header";
import Serch from "../components/serch";
import Banner from "../components/Banner";
import Exhibition from "../layouts/Exhibition";

import {connect} from 'react-redux'
import asyncAction from "../store/asyncAction";

import * as types from '../store/types'

 class Home extends React.Component{
    state={
        data:"home"
    };
    componentDidMount(){
        this.props.getbanner()
       
    }
    render(){  
        return(
            <div>
               <Head data={this.state.data}></Head>
                <Serch></Serch>
                {this.props.banner.data&&<Banner banner={this.props.banner.data}></Banner>}
               <Exhibition></Exhibition>               
            </div>
        )
    }
}



const mapState=(state)=>({
    banner:state.banner
})

const mapDispatch=(dispath)=>({
    getbanner:()=>dispath(asyncAction({
       apiname:"banner",
       typeName:types.UPDATE_BANNER 
    }))
})




export default connect(mapState,mapDispatch)(Home)














