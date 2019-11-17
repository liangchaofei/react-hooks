/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 17:46:26
 * @LastEditors: Please set LastEditors
 */
import React,{useState,useEffect} from 'react';

const UseEffect = () => {
    // React Hooks 提供了 Effect Hook，可以在函数组件中执行副作用操作，并且是在函数渲染DOM完成后执行副作用操作
    // useEffect这个方法传入一个函数作为参数，在函数里面执行副作用代码，并且useEffec的第一个参数还支持返回值为一个函数，这个函数执行相当于组件更新和卸载。
    
    // 最常见的做法就是就是在函数参数中写事件注册，在函数的返回函数中写事件销毁
    const [width,setWidth ] = useState(window.innerWidth)
    const resizeHandle = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        // 相当于componentDidMount和componentDidUpdate
        window.addEventListener('resize',resizeHandle)
        // 相当于componentWillUnmount
        return () => {
            window.removeEventListener('resize',resizeHandle)
        }
    })
    return (
        <h1>{width}</h1>
    )
}

export default UseEffect;

// https://codesandbox.io/s/cocky-khayyam-6zvko