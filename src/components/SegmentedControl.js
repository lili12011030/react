import React from "react"
import { SegmentedControl, WingBlank } from 'antd-mobile';

//分段器

export default class SegmentedControlExample extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <WingBlank size="lg" className="sc-example">
        <SegmentedControl selectedIndex={1} values={['热销', '风云榜', '签约榜','推荐榜']} onChange={this.onChange}
          onValueChange={this.onValueChange}/>
      </WingBlank>
    );
  }
}
