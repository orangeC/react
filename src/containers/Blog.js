import React from 'react';
import BlogCard from "../components/BlogCard"


class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  render () {
    let cards=data.map( (item,i) => <BlogCard {...item} key={i} /> )
    return(
      <div style={{width:'100%'}} className="blog-wrap">
      {cards}
      </div>
    )
  }
}

export default Blog;
