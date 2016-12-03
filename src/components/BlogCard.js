import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class BlogCard extends React.Component {
  render(){
    return (
        <div className="blog-card">
          <div className="blog-index"><span>1</span></div>
          <div className="blog-content clearfix">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <RaisedButton label="阅读更多" primary={true} />
          </div>
        </div>
      )
  }
}
BlogCard.defaultProps={
  index:1,
  title:"默认标题",
  desc:"介绍"
}
BlogCard.propTypes={
  index:React.propTypes.number,
  title:React.propTypes.string,
  desc:React.propTypes.string
}

export default BlogCard;
