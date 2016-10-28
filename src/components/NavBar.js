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
    handleTabsChange(value){
    	this.context.router.push(value)
  	}
	render(){
		let styles={
			nav:{
				transition:"all 0.5s",
				position:"absolute",
				top:"0",
				left:this.state.show ? "0" : "-30%",
				bottom:"0",
				width:"30%",
				backgroundColor:"#0ff"
			},
			navbar:{
				position:"absolute",
				top:"0",
				left:"0",
				bottom:"0",
				width:"100vw",
				backgroundColor:"rgba(0,0,0,0.3)",
				display:this.state.show ? "block" : "none"
			}
		}
		return (
			// <div onChange={this.handleToggle.bind(this)} >	
			// 	<button onClick={ () => this.setState({show:! this.state.show})}>click</button>
			// 	<div style={styles.nav} >导航</div>
			// 	<div style={styles.navbar} onClick={ () => this.setState({show:! this.state.show})}>遮罩</div>
			// </div>
			<div>
		        <Drawer docked={false} width={200}
		          open={this.state.open}
		          onRequestChange={this.handleTabsChange.bind(this)} 
		          >
		          <MenuItem onTouchTap={this.handleClose} value="/" >Home</MenuItem>
		          <MenuItem onTouchTap={this.handleClose} value="/blog" >Blog</MenuItem>
		          <MenuItem onTouchTap={this.handleClose} value="/work" >Work</MenuItem>
		          <MenuItem onTouchTap={this.handleClose} value="/about" >About me</MenuItem>
		        </Drawer>
		    </div>
			)
	}
}
NavBar.contextTypes={
  router:React.PropTypes.object.isRequired
}

export default NavBar