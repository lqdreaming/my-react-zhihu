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

class PCLoad extends React.Component {
	constructor() {
		super();
		this.state = {
			visible: true
		};
	};

	changeVisible(e){
		e.preventDefault();
		if (this.state.visible == true) {
			this.setState({visible: false});
		}
	};

	changeVisibleAgain(e){
		e.preventDefault();
		if (this.state.visible == false) {
			this.setState({visible: true});
		}
	};

	render() {
		const menuShow = this.state.visible
			? ''
			:
			<ul>
				<li>
					<img src="./src/images/pcImage/BT_iphone.png" alt="BT_iphone"/>
					<span>豌豆荚</span>
				</li>
				<li>
					<img src="./src/images/pcImage/BT_iphone.png" alt="BT_iphone"/>
					<span>91市场</span>
				</li>
				<li>
					<img src="./src/images/pcImage/BT_iphone.png" alt="BT_iphone"/>
					<span><a href="http://zhushou.360.cn/detail/index/soft_id/348684">360市场</a></span>
				</li>
			</ul>;

		return (
			<div id="PCLoad">
				<Row>
					<Col span={2}></Col>
					<Col span={12}>
						<a href="/" class="logo">
							<img src="./src/images/pcImage/logo_zhihu.png" alt="logo"/>
							<span>乎日报</span>
						</a>
					</Col>
					<Col span={4}>
						<Icon type="appstore"/> App下载
					</Col>
					<Col span={2}></Col>
				</Row>
				<div class="PCLoadMiddle">
						<img class="phoneImage" src="./src/images/pcImage/phone_sample.png" alt="phone_sample"/>
					<div class="PCLoadContent">
						<h1>每天三次 每次七分钟</h1>
						<p>在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。</p>
						<div class="PCLoadContent_bottom">
							<div class="PCLoad_left">
								<img src="./src/images/pcImage/qr_top.png" alt="qr_top"/>
							</div>
							<div class="PCLoad_right">
								<li>
									<img src="./src/images/pcImage/BT_iphone.png" alt="BT_iphone"/>
									<span><a href="https://itunes.apple.com/cn/app/id639087967?mt=8">iOS版</a></span>
								</li>
								<nav onMouseEnter={this.changeVisible.bind(this)} onMouseLeave={this.changeVisibleAgain.bind(this)}>
									<li>
										<img src="./src/images/pcImage/Android.png" alt="Android"/>
										<span>Android版</span>
									</li>
									{menuShow}
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}
export default PCLoad = Form.create({})(PCLoad);
