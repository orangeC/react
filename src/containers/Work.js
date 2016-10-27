import React from 'react';

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  // componentDidMount(){
  //   getWorkCard()
  //   .then((resData) => {
  //     this.setState({
  //       data:resData.getData,
  //       wait:false
  //     })
  //   })
  // }
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
      <div className='row'>
      work
      </div>
    )
  }
}

export default Work;
