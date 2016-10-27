import React from 'react';
import {Link} from 'react-router';
class NavLeft extends React.Component {

  render () {
    let styles={
      navLeft:{
        width:'20%',
        height:'100vh',
        backgroundColor:'#673AB7',
        display:'flex',
        flexDirection:'column'
      },
      h3:{
        borderBottom: '2px solid #fff59d',
        color:'#fff',
        height:'40px',
        textAlign:'center'
      },
      text:{
        width:'270px',
        height:'60px',
        lineHeight:'60px',
        textDecoration:'none',
        fontSize:'18px',
        paddingLeft:'8vw',
        display:"block"
      },
      glyphicon:{
        marginLeft:'-9%',
        marginRight:'8px'
      }
    }
    return(
      <div style={styles.navLeft}>
        <h3 style={styles.h3}>My <span style={{color:'#388E3C'}}>{this.props.title}</span></h3>
        <Link to='/' onlyActiveOnIndex={true} activeStyle={{backgroundColor:'#009688'}} className='text' style={styles.text}><span className="glyphicon glyphicon-home" style={styles.glyphicon}></span>Home</Link>
        <Link to='/blog' activeStyle={{backgroundColor:'#009688'}} className='text' style={styles.text}><span className="glyphicon glyphicon-file" style={styles.glyphicon}></span>Blog</Link>
        <Link to='/work' activeStyle={{backgroundColor:'#009688'}} className='text' style={styles.text}><span className="glyphicon glyphicon-briefcase" style={styles.glyphicon}></span>Work</Link>
        <Link to='/about' activeStyle={{backgroundColor:'#009688'}} className='text' style={styles.text}><span className="glyphicon glyphicon-user" style={styles.glyphicon}></span>about Me</Link>
      </div>
    )
  }
}
export default NavLeft;
