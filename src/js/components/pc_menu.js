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
	Modal
} from 'antd';
import { Router, Route, browserHistory,Link} from 'react-router';

class PCMenu extends React.Component {
	constructor(){
		super();
		this.state ={
			item: '',
			editors: [],
			menu: '',
			editor: '',
			stories: [],
			menuContent: []
		};
	};
	componentDidMount() {
    	var myFetchOptions = {
			method: 'GET'
		};
		for (var i = 2; i < 14; i++) {
			fetch("http://zhihuapi.herokuapp.com/api/4/theme/"+i)
			.then(response=>response.json())
			.then(json=>{
			let menuContent = this.state.menuContent.push(json);
		});
		}
		/*fetch("http://zhihuapi.herokuapp.com/api/4/theme/13")
		.then(response=>response.json())
		.then(json=>{
			let menuContent = this.state.menuContent.push(json);
		});
		fetch("http://zhihuapi.herokuapp.com/api/4/theme/12")
		.then(response=>response.json())
		.then(json=>{
			let menuContent = this.state.menuContent.push(json);*/
			/*this.setState({menu: json});
			this.setState({editors: json.editors});
			this.setState({stories: json.stories});
			this.setState({editor: json.editors[0]});*/
			console.log(this.state.menuContent);
		//});
  	};
	render() {
		let element = <img src={this.state.menu.background} id="mainImage" />;
		let editorImage = 
			<nav>
			{
				this.state.editors.map((item,index) => ([
					<span key={item}>
						<img src={item.avatar} />
					</span>
				]))
			}
			</nav>;

		let middleContent = 
			<nav>
				{
					this.state.stories.map((item,index) => ([
						<li key={item}>
						<Link to={`/Mobiledetail/${item.id}`}>{item.title}</Link>
						{
							item.images?
							<img src={item.images[0]} />
							:
							""
						}
						</li>
            		]))
            	}
			</nav>;

		return (
			<div id="PCMenu">
				<Row>
					<Col span={2}></Col>
					<Col span={12}>
						<a href="/" class="logo">
							<img src="./src/images/pcImage/logo_zhihu.png" alt="logo"/>
							<span>乎日报</span>
						</a>
					</Col>
					<Col span={4}>
						<Icon type="appstore"/> 栏目菜单
					</Col>
					<Col span={2}></Col>
				</Row>

				<div id="mainContent">
					{element}
					<p>{this.state.menu.description}</p>
					<div id="editorImage">
						<span>主编</span>
						{editorImage}
					</div>
					{middleContent}
				</div>
			</div>
		);
	};
}

PCMenu.contextTypes = {
	  router: React.PropTypes.object.isRequired
};

export default PCMenu = Form.create({})(PCMenu);
