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
    let styles={
      loading:{
        color:'#388E3C',
        fontSize:'28px',
        textAlign:'center',
        height:'100vh',
        lineHeight:'100vh'
      },
      tabs:{
        width:"400px",
        position:"absolute",
        right:"60px",
        textTransform:"uppercase"
      },
      tab:{
        height:"30px",
        color:"#fff"
      },
      inkBar:{
        height:"5px",
        marginTop:"-5px"
      },
      timePicker:{
        marginTop:"100px"
      },
      style:{
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
      }
    }
    return(
      <div style={{width:'100%'}} className="blog-wrap">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      
      </div>
    )
  }
}

export default Blog;
