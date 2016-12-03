import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class BlogCard extends React.Component {
  render(){
    return (
        <div className="blog-card">
          <div className="blog-index"><span>1</span></div>
          <div className="blog-content clearfix">
            <h3>标题</h3>
            <p>介绍</p>
            <RaisedButton label="阅读更多" />
          </div>
        </div>
      )
  }
}

export default BlogCard;
