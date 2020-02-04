import React, {Component} from 'react';
import '../../src/Tabs.css'

class HeaderComponent extends Component{
    state = {
        imgUrl: require('../../src/logo.png'),
        tabContent: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5']
    }
    getTabs(){
        return this.state.tabContent.map((value, i)=><a key={i} href="#" className="tabs">{value}</a>)
    }
    render(){
        return(
            <React.Fragment>
                <div className="hbg">
                    <img className="logo-img" src={this.state.imgUrl} alt=""/>
                    <div className="a-tabs">
                        {this.getTabs()}
                    </div>   
                    <div className="search-div">
                        <input className="search-bar" type="text" placeholder="search..."/>
                        <input className="s-btn" type="button" value="Go"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default HeaderComponent