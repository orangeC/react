import React from 'react';
import BlogCard from '../components/BlogCard';
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
  render () {
    let styles={
      loading:{
        color:'#388E3C',
        fontSize:'28px',
        textAlign:'center',
        height:'100vh',
        lineHeight:'100vh'
      }
    }
    return(
      <div style={{width:'100%'}}>
        {this.state.wait ? <p style={styles.loading}>loading...</p> : this.state.data.map( (item,index) => <BlogCard {...item} key={index} index={index}/> )}
      </div>
    )
  }
}

export default Blog;
