import React from 'react'

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack()
  }
  render () {
    return(
      <div className="nav-header">
        <p onClick={this.handleBack.bind(this)} style={{cursor:'pointer'}}><span className="glyphicon glyphicon-arrow-left"></span> Back</p>
        <h3>My <span style={{color:'#388E3C'}}>{this.props.title}</span></h3>
        <p><span className="glyphicon glyphicon-cog"></span></p>
      </div>
    )
  }
}
NavHeader.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default NavHeader;
