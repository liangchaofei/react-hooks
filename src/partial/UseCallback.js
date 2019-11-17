/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 18:12:55
 * @LastEditors: Please set LastEditors
 */
import React,{useCallback,useState} from 'react';

const UseCallback = () => {
    // useCallback可以认为是对依赖项的监听，把接受一个回调函数和依赖项数组，返回一个该回调函数的memoized(记忆)版本，该回调函数仅在某个依赖项改变时才会更新。
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(1);
    const memoized = useCallback(() => {
        return num;
    },[count])
    console.log('记忆：',memoized())
    console.log('原始:',num)
    return (
        <>
            <button onClick={() => {setCount(count+1)}}>count +</button>
            <button onClick={() => {setNum(num+1)}}>num+</button>
        </>
    )
}

export default UseCallback;

//https://codesandbox.io/s/shy-fog-rkm1j
