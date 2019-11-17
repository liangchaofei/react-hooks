/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 17:52:09
 * @LastEditors: Please set LastEditors
 */
import React,{useState,useEffect} from 'react';

const UseEffect = () => {
    // useEffect的第二个参数,useEffect的第二个参数是一个数组，表示以来什么state和props来执行副作用。
    // 数组为空的时候，useEffect就相当于componentDidMoubt和componentWillUnmount这两个生命周期，只在首次渲染和卸载的时候执行
    // 当数组中值是状态的时候，就会只监听这一个状态的变化。当然数组中可以多个值，监听存放state的变化。
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(2);
    useEffect(() => {
        console.log("count状态更新");
        return () => {
            console.log("useEffect卸载")
        }
    },[count])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <h1>{num}</h1>
            <button onClick={() => {setNum(num + 1)}}>+</button>
        </>
    );
}

export default UseEffect;

// https://codesandbox.io/s/stoic-shape-198wi