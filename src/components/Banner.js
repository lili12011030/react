import { Carousel, WingBlank } from 'antd-mobile';
import React from "react";

export default class Banner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 170,
      
    }
  }
 componentDidMount() {
    this.setState({
      data:this.props.banner,
    })
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay
          infinite 
        >
          {this.state.data.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                
                src={val.banner}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
               
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}