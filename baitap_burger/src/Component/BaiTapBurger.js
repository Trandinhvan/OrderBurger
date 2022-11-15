import React, { Component } from 'react'
import Burger from './Burger'
import ChonThucAn from './ChonThucAn'

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <Burger></Burger>
                </div>
                <div className='col-6'>
                    <ChonThucAn></ChonThucAn>
                </div>
            </div>
      </div>
    )
  }
}
