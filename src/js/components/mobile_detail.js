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
	Modal,
	BackTop} from 'antd';
import { Router, Route, browserHistory,Link} from 'react-router';

class Mobiledetail extends React.Component{
	constructor(){
		super();
		this.state ={
			detail: '',
			theme: '',
			extrajson:''
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
    	});
    	var myFetchOptions = {
			method: 'GET'
		};
		// console.log(this.state.id);
		fetch("http://zhihuapi.herokuapp.com/api/4/news/"+this.props.params.id)
		.then(response=>response.json())
		.then(json=>{
			this.setState({detail: json});
			this.setState({theme: json.theme});
		});
		fetch("http://zhihuapi.herokuapp.com/api/4/story-extra/"+this.props.params.id)
		.then(response=>response.json())
		.then(json=>{
			this.setState({extrajson: json});
		});
  	};

	render() {
		//let detailBody = this.state.title.boby;
		let detailImage = this.state.theme?
			<img src={this.state.theme.thumbnail} class="thumbnail" />:
			<img src={this.state.detail.image} class="thumbnail" />;
		let page=this.state.detail.body;
		return (
			<div id="Mobiledetail">
				<Menu id="mobileheader">
					<header>
						<img src="./src/images/arr.png" alt="back" onClick={this.back.bind(this)} />
						<a href={this.state.detail.share_url}> <img src="./src/images/share.png" alt="share" id="share"/></a>
						<img src="./src/images/star.png" alt="star" id="star"/>
						<div class="comment">
							<Link to={`/Mobilecomment/${this.props.params.id}`}>
								<img src="./src/images/comment.png" alt="comment" id="commentInf"/>
								<span>{this.state.extrajson.comments}</span>
							</Link>
						</div>
						<div class="comment">
								<img src="./src/images/thumb.png" alt="thumb" id="thumb"/>
								<span>{this.state.extrajson.popularity}</span>
						</div>
					</header>
				</Menu>
				<div id="title">
						{detailImage}
						<p class="titleBottom">{this.state.detail.title}</p>
				</div>
				<div dangerouslySetInnerHTML={{__html: this.state.detail.body}} class="page"></div>
				<div>
				    <BackTop />
				    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
				 </div>
			</div>
		);
	};
}

	Mobiledetail.contextTypes = {
	  router: React.PropTypes.object.isRequired
	};

export default Mobiledetail = Form.create({})(Mobiledetail);

