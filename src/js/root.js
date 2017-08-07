import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MobileNews from './components/mobile_news';
import MobileContent from './components/mobile_content';
import Mobiledetail from './components/mobile_detail';
import Mobilecomment from './components/mobile_comment';
import PCLoad from './components/pc_load';
import PCDetail from './components/pc_detail';
import PCMenu from './components/pc_menu';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
	render(){
		return(
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={hashHistory}>
						<Route path="/" component={PCIndex}></Route>
						
						<Route path="/PCLoad" component={PCLoad}></Route>
						<Route path="/PCMenu" component={PCMenu}></Route>
						<Route path="/PCDetail/:id" component={PCDetail}></Route>
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<Router history={hashHistory}>
						<Route path="/" component={MobileIndex}></Route>
						<Route path="/MobileContent/:id/:name" component={MobileContent}></Route>
						<Route path="/Mobiledetail/:id" component={Mobiledetail}></Route>
						<Route path="/Mobilecomment/:id" component={Mobilecomment}></Route>
					</Router>
				</MediaQuery>
			</div>	
		);
	};
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));
