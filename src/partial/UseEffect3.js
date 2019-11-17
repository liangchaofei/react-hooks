/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 17:55:22
 * @LastEditors: Please set LastEditors
 */
import React,{useState,useEffect} from 'react';

const UseEffect = () => {
    // 写多个useEffect
    // React Hook 允许函数式组件中定义多个useEffect(和useState类似)，多个useEffect互相不受干扰。
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(2);
    useEffect(() => {
        console.log("count状态更新");
        return () => {
            console.log("count卸载")
        }
    },[count])
    useEffect(() => {
        console.log("num状态更新");
        return () => {
            console.log("num卸载")
        }
    },[num])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <h1>{num}</h1>
            <button onClick={() => {setNum(num + 1)}}>+</button>
        </>
    );
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

// https://codesandbox.io/s/broken-hill-uholc