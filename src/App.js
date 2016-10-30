import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import NavLeft from './components/NavLeft';
import AppBar from 'material-ui/AppBar';
import NavBar from './components/NavBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import "./style/main.scss"


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      title:'Home'
    }
  }
  setNavBarState(){
    this.setState({navBarShow : window.innerWidth > 760 })
  }
  componentWillMount(){
    this.setNavBarState()
    window.onresize = this.setNavBarState.bind(this)
  }
  componentWillReceiveProps(){
    this.getTitle()
  }
  getTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? 'Home' :
            this.context.router.isActive('/blog') ? 'Blog' :
            this.context.router.isActive('/work') ? 'Work' : 
            this.context.router.isActive('/account') ? 'Account' : 'info'
    })
  }
  handleLeftBtn(){
    this.refs.leftNav.handleToggle()
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.navBarShow ? <NavLeft  title={this.state.title}/> : <AppBar title={this.state.title} onLeftIconButtonTouchTap={this.handleLeftBtn.bind(this)} /> }
        <div className="content-main">
          {this.state.navBarShow ? null : <NavBar ref="leftNav" />}
          {this.props.children}
        </div>
          {this.state.navBarShow ? null : <NavFooter />}
      </div>
    )
  }
}
App.contextTypes={
  router:React.PropTypes.object.isRequired
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
