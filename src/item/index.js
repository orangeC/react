import React from 'react';

class Item extends React.Component {
  render () {
    let content = this.props.params.title == 0 ? "第一页":
    this.props.params.title == 1 ? "第二页":
    this.props.params.title == 2 ? "第三页":"第n个页面"
    return(
      <div>
      {content}
      </div>
    )
  }
}

export default Item;
