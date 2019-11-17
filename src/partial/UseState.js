/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 18:08:42
 * @LastEditors: Please set LastEditors
 */
import React,{useState} from 'react';

// useState是React的一个Hook，它是一个方法，可以传入值作为state的默认值，返回一个数组，数组的第一项是对应的状态(默认值会赋予状态)，数组的第二项是更新状态的函数。
const UseState = () => {
  const  [count,setCount] = useState(1) // 1是初始值
  const [istrue,setIstrue] = useState(true) // true 是初始值
  const add = () => {
    setCount(count+1)
  }
  return (
    <>
    {/* 这里直接使用state */}
    {istrue ?<h1>{count}</h1>:'' }
      <button onClick={() => {setIstrue(!istrue)}}>change</button>
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      <button onClick={add}>+</button>
    </>
  )
}

export default UseState;

// https://codesandbox.io/s/zen-ramanujan-5wq7h