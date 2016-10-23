import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render () {
    let styles={
      contentHome:{
        backgroundImage:'url(http://pic.qiantucdn.com/58pic/16/98/54/83d58PICJyP_1024.jpg)',
        backgroundSize:'cover',
        backgroundPosition:"50% 50%",
        flexGrow:'1',
        color:'#fff',
        textAlign:'center'
      },
      homeBg:{
        width:'100%',
        height:'100vh',
        backgroundColor:'rgba(0,0,0,0.3)'
      },
      inner:{
        paddingTop:'220px'
      },
      h1:{
        margin:'0',
        marginBottom:'20px'
      },
      span:{
        color:"#00BCD4"
      },
      a:{
        display:'block',
        color:'#fff',
        width:'100px',
        height:'36px',
        textDecoration:'none',
        textAlign:'center',
        lineHeight:'36px',
        margin:'0 auto',
        marginTop:'20px'
      }
    }
    return(
      <div className='content-home' style={styles.contentHome}>
        <div className='home-bg' style={styles.homeBg}>
          <div className='home-inner' style={styles.inner}>
            <h1 style={styles.h1}>Welcome <span style={styles.span}> in</span></h1>
            <p>personal homepage</p>
            <Link to='/about' style={styles.a} className='home-active'>About ME</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
