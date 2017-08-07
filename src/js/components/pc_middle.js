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
	Carousel,
	BackTop} from 'antd';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,Link} from 'react-router';
import { Spin } from 'antd';

class PCMiddle extends React.Component{
	constructor(){
		super();
		this.state ={
			recent: [],
			menu: '',
			stories: [],
			scrollTop: '',
			scrollHeight: '',
			clientHeight: '',
			previousNews: [],
			previousStories: [],
			todayTime: ''
		};
	};

	componentWillMount() {
		//页面开始向 API 进行提交数据
		var myFetchOptions = {
			method: 'GET',
		};
		// http://localhost:9999/api/4/themes  <img src={item.thumbnail} />
		// http://zhihuapi.herokuapp.com/api/4/themes
		fetch("http://zhihuapi.herokuapp.com/api/3/news/hot")
		.then(response=>response.json())
		.then(json=>{
			this.setState({recent: json.recent});
		});
		fetch("http://zhihuapi.herokuapp.com/api/4/news/latest")
		.then(response=>response.json())
		.then(json=>{
			this.setState({menu: json});
			this.setState({stories: json.stories});
			this.setState({todayTime: json.date});
		});
	};

	handleWheel(e){
		//可视区域高度
	    //滚动条滚动高度
	    this.setState({clientHeight: window.screen.height});
	    this.setState({scrollHeight: document.body.scrollHeight});
	    this.setState({scrollTop: document.body.scrollTop}); //滚动内容高度
	    if((this.state.clientHeight+this.state.scrollTop)>=(this.state.scrollHeight)&&this.state.scrollHeight!=''){ //如果滚动到底部 
	   		fetch("http://zhihuapi.herokuapp.com/api/4/news/before/"+this.state.todayTime)
			.then(response=>response.json())
			.then(json=>{
				let previousNews = this.state.previousNews.push(json); //每次获取的内容存储到数组中
				this.setState({todayTime: json.date});  //更新为当前新闻这天的时间
			});
	   }  
	}; 

	render() {
		let latestnews =
			<nav>
				{
					this.state.stories.map((item,index) => ([
						<li key={item}>
						{
							item.images?
							<div>
								<img src={item.images[0]}/>
							</div>
							:
							""
						}
						<p><Link to={`/PCDetail/${item.id}`}>{item.title}</Link></p>
						</li>
            		]))
            	}
			</nav>;

		let imagePlay = this.state.recent!=""?
			<Carousel autoplay>
		  		{
			  		this.state.recent.map((item,index) => ([
						<div  key={index}>
							<Link to={`/PCDetail/${item.news_id}`}>
							<h3 style={{background: 'url('+item.thumbnail+') no-repeat', backgroundSize:'100% 100%'}}>
								{item.title}
		          			</h3>
		          			</Link>
		          		</div>
	        		]))
	        	}
  			</Carousel>
  			:
  			"";

  			let previousnews = this.state.previousNews!=""?
			<nav>
				{
					this.state.previousNews.map((item1,index) => ([
						<ul key={item1}>
								<h2>{item1.date.split("").slice(0,4)}年 {item1.date.split("").slice(5,6)}月 {item1.date.split("").slice(7,8)}日</h2>
							{
								item1.stories.map((item,index) => ([
									<li key={item}>
									{
										item.images?
										<div>
											<img src={item.images[0]} />
										</div>
										:
										""
									}
									<p>
										<Link to={`/PCDetail/${item.id}`}>{item.title}</Link>
									</p>
									</li>
		            			]))
	            			}
	            		</ul>
            		]))
            	}
			</nav>:
			"";

		return (
			<div id="PCMiddle" ref="bodyBox" onWheel={this.handleWheel.bind(this)}>
			{imagePlay}
				<section>
					<div class="dailyNews" id="dailyNews">
						<h2>今日热闻</h2>
						{latestnews}
					</div>
					<div class="dailyNews">
						{previousnews}
					</div>
					<div className="example">
    				<Spin />
    				<span>正在努力加载</span>
  				</div>
				</section>
				 <div>
				    <BackTop />
				    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
				 </div>
			</div>
		);
	};
}

export default PCMiddle = Form.create({})(PCMiddle);
