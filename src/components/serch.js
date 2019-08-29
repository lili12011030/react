import React from "react";
import { SearchBar,WhiteSpace} from 'antd-mobile';

export default class Search extends React.Component {
    render(){
        return (<div>
            <SearchBar placeholder="Search" maxLength={8} />
            <WhiteSpace />
            </div>)
    }
}












