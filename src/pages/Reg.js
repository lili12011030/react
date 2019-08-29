import React from 'react'
import {Icon, NavBar, InputItem,Button,WhiteSpace} from "antd-mobile";
import './Reg.css'
export default class Login extends React.Component{
  render(){
    let {history}=this.props;
    return (
      <div className="Login">
        {/*NavBar导航*/}

        <NavBar
          style={{background:'none'}}
          mode="light"
          icon={<Icon type="cross" />}
          rightContent={"帮助"}
          onLeftClick={() => history.go(-1)}
        />

        <div style={{marginTop:'25%',padding:'0 10%'}}>
          <h2>欢迎注册</h2>
          <WhiteSpace size={"xl"} />
          <InputItem
            type="phone"
            placeholder=""
            value={""}
          >用户名</InputItem>
          <WhiteSpace />
          <InputItem
            type="phone"
            placeholder=""
            value={""}
          >密码</InputItem>

          <WhiteSpace size={"xl"}/>

          <Button style={{background:'#399',color:"#fff"}}>注册</Button>
        </div>

      </div>
    )
  }
}