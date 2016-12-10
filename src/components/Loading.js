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
      root:{
        textAlign:"center"
      },
      circle:{
        marginTop:"4rem"
      }
    }
    return(
      <div style={styles.root} >
        <CircularProgress size={4.5} style={styles.circle} />
      </div>
    )
  }
}

export default Loading;
