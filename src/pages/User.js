import React from "react";
import QueueAnim from 'rc-queue-anim'
import {Link} from "react-router-dom";
// import {connect} from "react-redux";
// import asyncAction from "../store/asyncAction";
// import * as types from '../store/types'

import './User.scss';

export default class User extends React.Component{

    render(){
      console.log(this.props)
       let {data:{name,sub_title,maney,youhui,jifen,icon}}=this.props;
       
    return(
            <div className="profile-container">
    <QueueAnim type='bottom'>
        <div className="header"> 我的</div>
        <section  key='s2'>
            <section className='profile-number' >
              <Link to="" className='profile-link'>
                <img src={icon} alt='img is wrong' className='private-image'/>
                <div className='user-info'>
                  <div>{name}</div>
                  <div>
                    <div className='icon-tel'></div>
                    <span className='icon-mobile-number'>{sub_title}</span>
                  </div>
                </div>
                <div className='icon-arrow-right'>
                </div>
              </Link>
            </section>
            <section className='info-data' key='i1'>
              <ul className='clear'>
                <Link to='/balance' className='info-data-link'>
                  <span className='info-data-top'><b>{parseInt(maney).toFixed(2)}</b>元</span>
                  <span className='info-data-bottom'>我的余额</span>
                </Link>
                <Link to='/balance' className='info-data-link'>
                  <span className='info-data-top'><b>{youhui}</b>个</span>
                  <span className='info-data-bottom'>我的优惠</span>
                </Link>
                <Link to='/balance' className='info-data-link'>
                  <span className='info-data-top'><b>{jifen}</b>分</span>
                  <span className='info-data-bottom'>我的积分</span>
                </Link>
              </ul>
            </section>
          <section className='profile-list'>
          <QueueAnim deley='0.4'>          
            <div  className='myorder' key='i2'>
              <div className='icon-dingdan order-icon'></div>
              <div className='myorder-text'>
                <span>我的订单</span>
                <div className='icon-arrow-right'></div>
              </div>
            </div>
            <a href="https://home.m.duiba.com.cn/#/chome/index" className='myorder' key='i3'>
              <div className='icon-jifen1 order-icon'></div>
              <div className='myorder-text'>
                <span>积分商城</span>
                <div className='icon-arrow-right'></div>
              </div>
            </a>
            <div  className='myorder' key='i4' >
              <div className='icon-huangguan order-icon'></div>
              <div className='myorder-text'>
                <span>饿了么会员卡</span>
                <div className='icon-arrow-right'></div>
              </div>
            </div>
            <div  className='myorder' key='i5'>
              <div className='icon-yk_fangkuai_fill order-icon'></div>
              <div className='myorder-text'>
                <span>服务中心</span>
                <div className='icon-arrow-right'></div>
              </div>
            </div>
            <div  className='myorder' key='i6'>
              <div className='icon-changyonglogo40 order-icon'></div>
              <div className='myorder-text'>
                <span>下载饿了么APP</span>
                <div className='icon-arrow-right'></div>
              </div>
            </div>
        </QueueAnim>
          </section>
        </section>
        </QueueAnim>
            </div>
        )

    }
}

// const propsState=(state)=>({
//     user:state.user
// })
// const propsDispatch=(dispath)=>({
//     getuser:()=>dispath(asyncAction({
//         apiname:"user",
//         typeName:types.UPDATE_USER
//      })),
//      goback:()=>this.props.history.push("/home")
// })


// export default connect(propsState,propsDispatch)(User)