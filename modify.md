###
nav-footer中修改过的

##
// <Link to='/' activeStyle={{borderBottom:"5px solid #FF4081"}} onlyActiveOnIndex={true} className="nav-text"><span className="glyphicon glyphicon-home"></span><br />Home</Link>
// <Link to='/blog' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text"><span className="glyphicon glyphicon-file"></span><br />Blog</Link>
// <Link to='/work' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text"><span className="glyphicon glyphicon-briefcase"></span><br />Work</Link>
// <Link to='/about' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text nav-text-last"><span className="glyphicon glyphicon-user"></span><br />about Me</Link>

###
APP  
##
{this.state.navLeftShow ? null : <NavFooter />}




Blog 


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
      </div>
    )
  }
}

export default Blog;
