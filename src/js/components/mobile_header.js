import React from 'react';
import {Row, Col} from 'antd';
import { 
	Menu, 
	Icon, 
	Tabs,
	message, 
	Form, 
	Input, 
	Button, 
	CheckBox, 
	Modal} from 'antd';
import { Router, Route, browserHistory,Link} from 'react-router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component{
	constructor(){
		super();
		this.state ={
			current: 'top',
			visible: 'true',
			title: '首页',
			menuTitle: [],
			item: ''
		};
	};

	changeVisible(e){
		e.preventDefault();
		this.setState({visible: ! this.state.visible});
	};

	componentWillMount() {
		//页面开始向 API 进行提交数据
		var myFetchOptions = {
			method: 'GET'
		};
		// http://localhost:9999/api/4/themes
		// http://zhihuapi.herokuapp.com/api/4/themes
		fetch("http://zhihuapi.herokuapp.com/api/4/themes")
		.then(response=>response.json())
		.then(json=>{
			this.setState({menuTitle: json.others});
		});
	};

	render() {
		const menuShow = this.state.visible
			? ''
			: 
			<div class="menuwhole">
				<nav class="menu">
					<div class="menuTop">
					<p>
						<img id="myImage" src="./src/images/xl.jpg" />
						<span>lqdreaming</span>
					</p>
					<p>
						<img src="./src/images/github.png" />
						<a href="https://github.com/lqdreaming">https://github.com/lqdreaming</a>
					</p>
				</div>
				<p class="menuMiddle">
					<img src="./src/images/home.png" />
					<span  onClick={this.changeVisible.bind(this)}>首页</span>
				</p>
				{
					this.state.menuTitle.map(item => ([
              			<li key={item}>
              				<Link class="menuName" to={`/MobileContent/${item.id}/${item.name}`}>{item.name}</Link>
              				<img class="menuImg" src="./src/images/add.png" />
              			</li>
            		]))
            	}
            	</nav>
        		<div class="mask"></div>
			</div>;

		return (
			<Menu id="mobileheader">
				<header>
					<img src="./src/images/menu.png" alt="logo" onClick={this.changeVisible.bind(this)}/>
					<span>{this.state.title}</span>
					<img id="bell" src="./src/images/bell.png" alt="bell"/>
					<img id="threepoints" src="./src/images/threepoints.png" alt="three points"/>
				</header>
				{menuShow}
			</Menu>
		);
	};
}

export default MobileHeader = Form.create({})(MobileHeader);

