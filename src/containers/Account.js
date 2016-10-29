import React from "react";
import ReactDOM from "react-dom";
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './../user/UserInfo';

class Account extends React.Component{
	constructor(){
		super();
		this.state={
			user:{}
		}
	}
	handleSubmit(e){
		e.preventDefault();
		let account = this.refs.account.getValue();
		console.log(account);
		axios.get(`https://api.github.com/users/${account}`)
		.then( (res) =>{
			this.setState({user:res.data})
			console.log(res)
		} )
		.catch((res) => {
          console.log(res);
        });
	}
	render(){
		let GitHubInfo;
	    if(!isEmpty(this.state.user)) {
	      GitHubInfo = (
	        <UserInfo userInfo={this.state.user} />
	      );
	    }
		return (
				<div className="account">
				<Card className="content">
					<form onSubmit={this.handleSubmit.bind(this)} >
						<TextField hintText="write something" 
						           ref="account" />
						<FlatButton label=" submit " secondary={true} type="submit" />
					</form>
				</Card>
				{GitHubInfo}
				</div>
			)
	}
}


export default Account