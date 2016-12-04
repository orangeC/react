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
    let styles={
      circle:{
        left:"20vw"
      }
    }
    return(
      <div>
        <CircularProgress size={5} style={styles.circle} />
      </div>
    )
  }
}

export default Loading;
