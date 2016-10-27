import React from 'react';
import LeftNav from './NavBar';

class AppLeftNav extends React.Component {
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
  render () {
    
    return(
      <LeftNav open={this.state.open} />
    )
  }
}
export default AppLeftNav;
