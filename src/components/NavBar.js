import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class NavBar extends React.Component{
	constructor(){
		super();
		this.state={
			open:false
		}
	}
	handleToggle(){
	    this.setState({
	      open:!this.state.open
	    })
	  }
	  handleClose(){
	  	this.setState({
	  		open:false
	  	})
	  }
	render(){
		let styles={
			a:{
				textDecoration:'none'
			}
		}
		return (
			<div>
		        <Drawer docked={false} width={200}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}
		          >
		          <Link to="/"  style={styles.a} onlyActiveOnIndex={true}><MenuItem onTouchTap={this.handleClose.bind(this)} >Home</MenuItem></Link>
		          <Link to="/blog" style={styles.a} ><MenuItem onTouchTap={this.handleClose.bind(this)}>Blog</MenuItem></Link>
		          <Link to="/work" style={styles.a} ><MenuItem onTouchTap={this.handleClose.bind(this)}>Work</MenuItem></Link>
		          <Link to="/about" style={styles.a} ><MenuItem onTouchTap={this.handleClose.bind(this)}>About me</MenuItem></Link>
		        </Drawer>
		    </div>
			)
	}
}
NavBar.contextTypes={
  router:React.PropTypes.object.isRequired
}

export default NavBar