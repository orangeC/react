import React from 'react';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
class NavFooter extends React.Component {
  constructor(props,context){
    super(props,context)
  }
  handleTabsChange(value){
    this.context.router.push(value)
  }
  render () {
    return(
      <div >
        <Tabs onChange={this.handleTabsChange.bind(this)} >
            <Tab
              icon={<FontIcon className="glyphicon glyphicon-home" />}
              label="HMOE"
              value="/"
            />
            <Tab
              icon={<FontIcon className="glyphicon glyphicon-file" />}
              label="BLOG"
              value="/blog"
            />
            <Tab
              icon={<FontIcon className="glyphicon glyphicon-briefcase" />}
              label="WORK"
              value="/work"
            />
            <Tab
              icon={<MapsPersonPin />}
              label="ABOUT ME"
              value="/about"
            />
          </Tabs>
      </div>
    )
  }
}

NavFooter.contextTypes={
  router:React.PropTypes.object.isRequired
}

export default NavFooter;
