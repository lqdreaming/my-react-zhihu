import React from 'react';
import PCHeader from './pc_header';
import PCfooter from './pc_footer';
import PCMiddle from './pc_middle';

export default class PCIndex extends React.Component{
	render(){
		return(
			<div id="PCIndex">
				<PCHeader></PCHeader>
				<PCMiddle></PCMiddle>
				<PCfooter></PCfooter>
			</div>
		);
	};
}

