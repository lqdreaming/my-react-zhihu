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

class MobileContent extends React.Component{
	constructor(){
		super();
		this.state ={
			item: '',
			editors: [],
			menu: '',
			editor: '',
			stories: []
		};
	};

	back(e){
		e.preventDefault();
		// this.props.history.goBack();
		this.context.router.goBack();
	};

	componentDidMount() {
   		this.setState({
      		// 路由应该通过有用的信息来呈现，例如 URL 的参数
      		id: this.props.params.id,
      		name: this.props.params.name,
    	});
    	var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://zhihuapi.herokuapp.com/api/4/theme/"+this.props.params.id)
		.then(response=>response.json())
		.then(json=>{
			this.setState({menu: json});
			this.setState({editors: json.editors});
			this.setState({stories: json.stories});
			this.setState({editor: json.editors[0]});
		});
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
			<div id="mainContent">
				<Menu id="mobileheader">
					<header>
						<img src="./src/images/arr.png" alt="back" onClick={this.back.bind(this)} />
						<span>{this.state.name}</span>
					</header>
				</Menu>
				{element}
				<p>{this.state.menu.description}</p>
				<div id="editorImage">
					<span>主编</span>
					{editorImage}
				</div>
				{middleContent}
			</div>
		);
	};
}

	MobileContent.contextTypes = {
	  router: React.PropTypes.object.isRequired
	};

export default MobileContent = Form.create({})(MobileContent);

