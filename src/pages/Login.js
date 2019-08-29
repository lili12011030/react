import React from "react";
import style from  "./Login.module.css"
import logo from "../assets/img/logo.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as types from "../store/types"
import asyncAction from "../store/asyncAction"

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            password:"",
            mess:""
        }
    }
    
    changeMess=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }


    render(){
        let {username,password}=this.state;
        return(
            <div className={style.Login}>
                <div className={style.goback} onClick={()=>{this.props.history.push("/home")}}>&lt;   返回</div>
                <header>
		            <img src={logo} /><p>登录<span></span></p>
	            </header>
                <main>
                    <input type="text" placeholder="邮箱/手机号码" name="username" className={style.txt} value={username} onChange={this.changeMess}/>
                    <input type="password" placeholder="密码" name="password" className={style.psd} value={password} onChange={this.changeMess}/>
                    <a href="##" className={style.login} onClick={
                        ()=>this.props.login({
                            username:this.state.username,
                            password:this.state.password,
                            history:this.props.history,
                            _this:this
                        })
                    }>立即登录</a>
                    <div>{this.state.mess}</div>
                    <Link to="/reg" className={style.zhuce}>注册账号</Link> <span>|</span><a href="#" className={style.forget}>忘记密码？</a>
                </main>
            </div>
        )
    }
}

const propsdispath = (dispath,ownProps)=>({
    login:({username,password,history,_this})=>dispath(asyncAction({
        apiname:"login",
        params:{username,password},
        typeName:types.UPDATE_USER
    })).then(
        res=>{
            if(res.err==0){
                history.push("/user")
            }else{
                _this.setState({mess:res.msg})
            }
        }
    )
});


export default connect(null,propsdispath)(Login)