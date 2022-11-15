import React, { Component } from 'react'
import {connect} from 'react-redux'

class ChonThucAn extends Component {

  
  renderMenu = () =>{
    let{menu,burger} = this.props;
    // console.log(burger)
    //let content = [];
    // for(let propsMenu in menu){
    //   content.push(<tr>
    //     <td>{propsMenu}</td>
    //     <td>
    //         <button  onClick={()=>{
    //           this.props.datCuoc();
    //         }} className='btn btn-success'>+</button>
    //         <span>{this.renderSoLuong()}</span>
    //         <button className='btn btn-danger'>-</button>
    //     </td>
    //     <td>{menu[propsMenu]}</td>
    //     <td>0</td>
    // </tr>)
    // }

    return Object.entries(menu).map(([propsMenu,price],index)=>{
        return (
          <tr key={index}>
         <td>{propsMenu}</td>
         <td>
             <button onClick={()=>{this.props.chonMon(propsMenu,1)}} className='btn btn-success'>+</button>
             <span>{burger[propsMenu]}</span>
             <button onClick={()=>{
              this.props.chonMon(propsMenu,-1);
             }} className='btn btn-danger'>-</button>
         </td>
          {/* <td>{menu[propsMenu]}</td> */}
          <td>{price}</td>
          <td>{burger[propsMenu]*price}</td>
        </tr>
        )
    })
  }


  render() {
    return (
      <div>
        <h3>Chọn thức ăn</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Thức ăn</th>
                    <th></th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                {this.renderMenu()}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={2}></td>
                    <td>Tổng tiền</td>
                    <td>{this.props.total}</td>
                </tr>
            </tfoot>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state =>{
    return{
      burger: state.BaiTapBurgerProducer.burger,
      menu: state.BaiTapBurgerProducer.menu,
      total: state.BaiTapBurgerProducer.total
    }
}

const mapDispatchToProps = dispatch =>{
    return {
      chonMon: (maMon,amount) =>{
        const action = {
          type: 'CHON_MON',
          maMon,
          amount
        }
        dispatch(action)
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChonThucAn)
