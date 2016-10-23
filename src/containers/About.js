import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';


class About extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      data:{},
      wait:0
    }
  }
  handleChange(e){
    this.setState({input:e.target.value})
  }
  handleSubmit(e){
    this.setState({
      wait:1
    })
    e.preventDefault();
  }
  
  render () {
    let styles={
      root:{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
        maxWidth:'760px',
        margin:'10px auto',
        marginTop:'72px',
        padding:'20px'
      },
      title:{
        color:'#00BCD4'
      },
      search:{
        padding:'10px',
        textAlign:'center',
        maxWidth:'90%',
        margin:'0 auto'
      },
      field:{
        width:'50%',
        marginRight:'20px'
      }
    }
    return(
      <div>
        <div style={styles.root}>
          <h2 style={styles.title}>About Me</h2>
          <div style={styles.search}>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
