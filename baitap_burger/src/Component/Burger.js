import React, { Component } from 'react'
import '../burger.css'
import {connect} from 'react-redux'

class Burger extends Component {

  renderBurger = ()=>{
      let {burger} = this.props;
      let content = [];
      for(let propBurger in burger){
          let burgerContent = [];
          for(let i = 0; i<burger[propBurger];i++){
              burgerContent.push(<div key={i} className={propBurger}></div>)
          }
          content.push(burgerContent);
      }
      return content;
      // return Object.entries(burger).map(([propsBurger,value],index)=>{
         
      //     let burgerContent = [];
      //     for(let i = 0;i<value;i++){
      //         burgerContent.push(<div key={i} className={propsBurger}></div>);
      //     }
      //     return burgerContent;
          
      // })
  }

  render() {
    return (
      <div>
        <div className='breadTop'>

        </div>
        {this.renderBurger()}
        <div className='breadBottom'>

        </div>
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return {
    burger: state.BaiTapBurgerProducer.burger
  }
}

export default connect(mapStateToProps)(Burger)

