import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import NavLeft from './components/NavLeft';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      navLeftShow:false,
      title:'Home'
    }
  }
  setNavBarState(){
    this.setState({navLeftShow : window.innerWidth > 760 ? true : false})
  }
  componentDidMount(){
    this.setNavBarState()
    window.onresize = this.setNavBarState.bind(this)
  }
  componentWillReceiveProps(){
    this.getTitle()
  }
  componentWillMount(){
    this.getTitle()
  }
  getTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? 'Home' :
            this.context.router.isActive('/blog') ? 'Blog' :
            this.context.router.isActive('/work') ? 'Work' : 'info'
    })
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.navLeftShow ? <NavLeft title={this.state.title}/> : <NavHeader title={this.state.title}/>}
        <div className="content-main">
          {this.props.children}
        </div>
        {this.state.navLeftShow ? null : <NavFooter />}

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
