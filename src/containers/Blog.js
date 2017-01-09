import React from 'react';
import BlogCard from "../components/BlogCard";
import axios from "axios";
import CircularProgress from 'material-ui/CircularProgress';
import Loading from "../components/Loading";
import {getBlogCard} from '../utils/helpers';



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
  // componentDidMount(){
  //   axios.get("https://raw.githubusercontent.com/orangeC/react/gh-pages/src/data/blogcard.json?a="+Math.random())
  //   .then(
  //       res => this.setState({data:res.data,wait:false})
  //     )
  // }
  render () {
    return(
      <div style={{width:'100%'}} className="blog-wrap">
      {this.state.wait ? <Loading /> : this.state.data.map( (item,i) => <BlogCard {...item} key={i} index={i+1} /> )}
      </div>
    )
  }
}

export default Blog;
