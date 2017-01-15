import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  word:{
    fontSize:"1.8em",
    marginTop:".5em",
    marginBottom:".2em"
  }
};

const tilesData = [
  {
    img: 'https://raw.githubusercontent.com/orangeC/myImg/master/img/1.png',
    title: ' ',
    author: '秀厨网（PC端项目页面）',
    ref:"http://orangeC.coding.me/showkitchen"
  },
  {
    img: 'https://raw.githubusercontent.com/orangeC/myImg/master/img/2.png',
    title: ' ',
    author: '迈思设计（jquery js插件）',
    ref:"http://orangeC.coding.me/maisi"
  },
  {
    img: 'https://raw.githubusercontent.com/orangeC/myImg/master/img/5.png',
    title: ' ',
    author: '个人主页（react单页面应用）',
    ref:"https://orangeC.github.io/react"
  },
  {
    img: 'https://raw.githubusercontent.com/orangeC/myImg/master/img/4.png',
    title: ' ',
    author: '第嘉（响应式）',
    ref:"http://orangeC.coding.me/digi"
  },
  {
    img: 'https://raw.githubusercontent.com/orangeC/myImg/master/img/3.png',
    title: ' ',
    author: '个人简历（移动端）',
    ref:"http://orangeC.coding.me/resume"
  },
  {
    img: 'https://raw.githubusercontent.com/orangeC/myImg/master/img/6.png',
    title: ' ',
    author: '小游戏：你画我猜（H5canvas）',
    ref:"https://orangec.github.io/palette/"
  }
];

const Show = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader style={styles.word}>个人作品展示</Subheader>
      {tilesData.map((tile) => (
        <a className="showA" href={tile.ref} target="_blank"><GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span><b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile></a>
      ))}
    </GridList>
  </div>
);

export default Show;