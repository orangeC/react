import React from "react";
import ReactDOM from "react-dom";
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Account extends React.Component{
	handleSubmit(e){
		e.preventDefault();
		let account = this.refs.account.getValue();
		console.log(account)
	}
	render(){
		return (
				<div className="account">
				<Card className="content">
					<form onSubmit={this.handleSubmit.bind(this)} >
						<TextField hintText="write something" 
						           ref="account" />
						<FlatButton label=" submit " secondary={true} type="submit" />
					</form>
				</Card>
				</div>
			)
	}
}


export default Account