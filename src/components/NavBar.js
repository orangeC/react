import React from "react";
import ReactDOM from "react-dom";

class NavBar extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
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
			<div>	
				<button onClick={ () => this.setState({show:! this.state.show})}>click</button>
				<div style={styles.nav} >导航</div>
				<div style={styles.navbar} onClick={ () => this.setState({show:! this.state.show})}>遮罩</div>
			</div>
			)
	}
}

export default NavBar