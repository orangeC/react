import React from 'react';
import {Link} from 'react-router';
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link to='/' activeStyle={{borderBottom:"5px solid #FF4081"}} onlyActiveOnIndex={true} className="nav-text"><span className="glyphicon glyphicon-home"></span><br />Home</Link>
        <Link to='/blog' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text"><span className="glyphicon glyphicon-file"></span><br />Blog</Link>
        <Link to='/work' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text"><span className="glyphicon glyphicon-briefcase"></span><br />Work</Link>
        <Link to='/about' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text nav-text-last"><span className="glyphicon glyphicon-user"></span><br />about Me</Link>
      </div>
    )
  }
}

export default NavFooter;
