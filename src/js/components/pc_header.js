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
	Anchor} from 'antd';
import { Router, Route, browserHistory,Link} from 'react-router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class PCHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
	};
	setModalVisible(value)
	{
		this.setState({modalVisible: value});
	};
	
	render() {
		let {getFieldProps} = this.props.form;
		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={6}>
						<a href="/" class="logo">
							<img src="./src/images/pcImage/logo_zhihu.png" alt="logo"/>
							<span>乎日报</span>
						</a>
					</Col>
					<Col span={12}>
						<Menu mode="horizontal">
							<Menu.Item class="menuItem">
								<Link to={'/PCLoad'}>
									<Icon type="appstore"/>App下载
								</Link>
							</Menu.Item>
							<Menu.Item class="menuItem">
								<a href="#dailyNews" id="menuAnchor"><Icon type="appstore"/>浏览内容</a>
							</Menu.Item>
							<Menu.Item class="menuItem">
								<Link to={'/PCMenu'}>
									<Icon type="appstore"/>栏目分类
								</Link>
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	};
}
export default PCHeader = Form.create({})(PCHeader);
