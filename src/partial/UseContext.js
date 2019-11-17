/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 18:20:29
 * @LastEditors: Please set LastEditors
 */
import React,{useContext} from 'react';

// 状态共享
const AppContext =  React.createContext({})

const AAA = () => {
    const { username } = useContext(AppContext)
    return (
        <div>
            AAA- {username}
        </div>
    )
}

const BBB = () => {
    const { username } = useContext(AppContext)
    return (
        <div>
            BBB- {username}
        </div>
    )
}

const UseContext = () => {
    return (
        <AppContext.Provider value={{
            username: 'xiaoming'
          }}>
            <div className="App">
              <AAA />
              <BBB />
            </div>
          </AppContext.Provider>
    )
}
export default UseContext;


// https://codesandbox.io/s/recursing-hoover-tsirf