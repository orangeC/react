import React from 'react';
import BlogCard from "../components/BlogCard";
import axios from "axios";
import CircularProgress from 'material-ui/CircularProgress';


class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/orangeC/react/gh-pages/src/data/blogcard.json")
    .then(
        res => this.setState({data:res.data,wait:false})
      )
  }
  render () {
    return(
      <div style={{width:'100%'}} className="blog-wrap">
      {this.state.wait ? <CircularProgress className="circle" /> : this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> )}
      </div>
    )
  }
}

export default Blog;
