import React from 'react';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
class NavFooter extends React.Component {
  render () {
    return(
      <div >
        // <Link to='/' activeStyle={{borderBottom:"5px solid #FF4081"}} onlyActiveOnIndex={true} className="nav-text"><span className="glyphicon glyphicon-home"></span><br />Home</Link>
        // <Link to='/blog' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text"><span className="glyphicon glyphicon-file"></span><br />Blog</Link>
        // <Link to='/work' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text"><span className="glyphicon glyphicon-briefcase"></span><br />Work</Link>
        // <Link to='/about' activeStyle={{borderBottom:"5px solid #FF4081"}} className="nav-text nav-text-last"><span className="glyphicon glyphicon-user"></span><br />about Me</Link>
        <Tabs>
            <Tab
              icon={<FontIcon className="glyphicon glyphicon-home" />}
              label="HMOE"
            />
            <Tab
              icon={<FontIcon className="glyphicon glyphicon-file" />}
              label="BLOG"
            />
            <Tab
              icon={<FontIcon className="glyphicon glyphicon-briefcase" />}
              label="WORK"
            />
            <Tab
              icon={<MapsPersonPin />}
              label="ABOUT ME"
            />
          </Tabs>
      </div>
    )
  }
}

export default NavFooter;
