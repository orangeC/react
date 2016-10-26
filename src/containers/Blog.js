import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import TimePicker from 'material-ui/TimePicker';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getBlogCard()
    .then((resData) => {
      this.setState({
        data:resData.getData,
        wait:false
      })
    })
  }
  render () {
    let styles={
      loading:{
        color:'#388E3C',
        fontSize:'28px',
        textAlign:'center',
        height:'100vh',
        lineHeight:'100vh'
      },
      tabs:{
        width:"400px",
        position:"absolute",
        right:"60px",
        textTransform:"uppercase"
      },
      tab:{
        height:"30px",
        color:"#fff"
      },
      inkBar:{
        height:"5px",
        marginTop:"-5px"
      },
      timePicker:{
        marginTop:"100px"
      },
      style:{
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
      }
    }
    return(
      <div style={{width:'100%'}}>
      <RaisedButton label="cheng" />
      <Tabs style={styles.tabs}>
            <Tab label="one" />
            <Tab label="two" />
            <Tab label="three" />
      </Tabs>
      <TimePicker style={styles.timePicker}
            hintText="12hr Format"
          />
          <TimePicker
            format="24hr"
            hintText="24hr Format"
          />
          <TimePicker
            disabled={true}
            format="24hr"
            hintText="Disabled TimePicker"
          />
          <CircularProgress />
          <CircularProgress size={60} thickness={7} />
          <CircularProgress size={80} thickness={5} />
          <Paper style={styles.style} zDepth={1} />
          <Paper style={styles.style} zDepth={2} />
          <Paper style={styles.style} zDepth={3} />
          <Paper style={styles.style} zDepth={4} />
      </div>
    )
  }
}

export default Blog;
