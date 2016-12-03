import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';


class Loading extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  
  render () {
    return(
      <div>
        <CircularProgress size={7} style={{margin:"0 auto"}} />
      </div>
    )
  }
}

export default Loading;
