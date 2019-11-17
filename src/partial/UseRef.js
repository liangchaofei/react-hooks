/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 18:27:56
 * @LastEditors: Please set LastEditors
 */
import React,{useRef,useEffect} from 'react';

// 获取焦点
const UseRef = () => {
  let inputRef = useRef(null)
  useEffect(() => {
      inputRef.current.focus()
  })
  return (
      <input type="text" ref={inputRef} />
  )
} 

export default UseRef;

// https://codesandbox.io/s/empty-field-wtxj8