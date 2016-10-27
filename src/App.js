import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import NavLeft from './components/NavLeft';
import AppBar from 'material-ui/AppBar';
import AppLeftNav from './components/AppLeftNav';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import "./main.scss"


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
    this.setState({navBarShow : document.body.clientWidth > 760 })
  }
  componentDidMount(){
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
            this.context.router.isActive('/work') ? 'Work' : 'info'
    })
  }
  handleLeftBtn(){
    console.log(1)
    this.refs.leftNav.handleToggle()
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.navBarShow ? <NavLeft  title={this.state.title}/> : <AppBar title={this.state.title} onLeftIconButtonTouchTap={this.handleLeftBtn.bind(this)} /> }
        <div className="content-main">
        <AppLeftNav ref="leftNav" />
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
