import React from 'react';
import LeftNav from 'material-ui/left-nav';

class AppLeftNav extends React.Component {
  constructor(){
    super();
    this.state={
      open:false
    }
  }

  render () {
    
    return(
      <LeftNav open={this.state.open} />
    )
  }
}
export default AppLeftNav;
