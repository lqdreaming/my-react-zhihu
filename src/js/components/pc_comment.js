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
import formatTime from 'minutes-seconds-milliseconds';

class PCComment extends React.Component{
	constructor(){
		super();
		this.state ={
			longComments: [],
			shortComments: [],
			id: ''
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
      		id: this.props.id,
    	});
    	var myFetchOptions = {
			method: 'GET'
		};
		console.log(this.state.id);
		fetch("http://zhihuapi.herokuapp.com/api/4/story/"+this.props.id+"/long-comments")
		.then(response=>response.json())
		.then(json=>{
			this.setState({longComments: json.comments});
		});
		fetch("http://zhihuapi.herokuapp.com/api/4/story/"+this.props.id+"/short-comments")
		.then(response=>response.json())
		.then(json=>{
			this.setState({shortComments: json.comments});
		});
  	};

	render() {
		let longComments = 
			<nav>
				{
					this.state.longComments.map((item,index) => ([
						<li key={item}>
							<p>
								<img src={item.avatar} />
								<span id="author">{item.author}</span>
								<span id="favour">
									<img src="./src/images/favour.png" alt="favour" />
									<span>{item.likes}</span>
								</span>
							</p>
							<p id="content">{item.content}</p>
							<p id="time">{formatTime(item.time)}</p>
						</li>
            		]))
            	}
			</nav>;
		let shortComments = 
			<nav>
				{
					this.state.shortComments.map((item,index) => ([
						<li key={item}>
							<p>
								<img src={item.avatar} />
								<span id="author">{item.author}</span>
								<span id="favour">
									<img src="./src/images/favour.png" alt="favour" />
									<span>{item.likes}</span>
								</span>
							</p>
							<p id="content">{item.content}</p>
							<p id="time">{formatTime(item.time)}</p>
						</li>
            		]))
            	}
			</nav>;

		return (
			<div id="PCComment">
				<h2>{this.state.longComments.length} 条长评</h2>
				{longComments}
				<h2>{this.state.shortComments.length} 条短评</h2>
				{shortComments}
			</div>
		);
	};
}

	PCComment.contextTypes = {
	  router: React.PropTypes.object.isRequired
	};

export default PCComment = Form.create({})(PCComment);

