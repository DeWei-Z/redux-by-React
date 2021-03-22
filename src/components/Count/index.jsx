import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrease,createDecrease} from '../../redux/countAction'

export default class Count extends Component {

   


   increase=()=>{
       const {value}=this.sectionNode
       store.dispatch(createIncrease(value*1))
   }

   decrease=()=>{
       const {value}=this.sectionNode
       store.dispatch(createDecrease(value*1))
   }

   IfOddIncrease=()=>{
      const {value}=this.sectionNode
      const count=store.getState()
      if(count % 2!==0){
          store.dispatch(createIncrease(value*1))
      }
     
   }

   AsyncDecrease=()=>{
    const {value}=this.sectionNode
    setTimeout(()=>{
        store.dispatch(createDecrease(value*1))
    },2000)
    
   }

    render() {

        

        return (
        <div>
                <h3>当前的求和为：{store.getState()}</h3>
            <select ref={c=>this.sectionNode=c}style={{width:'100px'}} >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={this.increase}>+</button>&nbsp;
            <button onClick={this.decrease}>-</button>&nbsp;
            <button onClick={this.IfOddIncrease}>和为奇数再加</button>&nbsp;
            <button onClick={this.AsyncDecrease}>异步减</button>
        </div>
        )
    }
}
