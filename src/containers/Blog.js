import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import TimePicker from 'material-ui/TimePicker';

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
