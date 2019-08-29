import React from "react";
import ReactDom from "react-dom";
import App from "./layouts/App.js";

// 引入UI库样式
import 'antd-mobile/dist/antd-mobile.css';

import "./assets/css/public.css"
 //配置axios
import './plugins/axios' 

//引入路由相关组件
import {BrowserRouter,Route} from  "react-router-dom"

import store from './store';//引入redux
import {Provider} from 'react-redux'


let local=window.localStorage.getItem("new_user")
if(local){
    store.dispatch({type:"UPDATE_USER",payload:JSON.parse(local)})
}

ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
    </Provider>,
    
    document.querySelector("#root")
)
