import { NavBar, Icon } from 'antd-mobile';
import React from "react"
export default class head extends React.Component{

constructor(props){
    super(props)
    this.state={
        head:this.props.data

    }
    console.log(this.state.head)
   
}
show(){
    
}




render(){

    if(this.state.head==="detail"){
        return(
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >一个人的时间</NavBar>
            </div>
        )
    }
    if(this.state.head==="home"){
        return(
            <div className="header-box">
                <NavBar
                    mode="dark"
                    leftContent="中文网"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.show}/>,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >  NavBar    </NavBar>
            </div>
        )
    }
    
}

  
}