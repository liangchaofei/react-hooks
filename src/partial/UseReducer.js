/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-11-17 18:29:18
 * @LastEditors: Please set LastEditors
 */
import React,{useReducer} from 'react';

const myReducer = (state, action) => {
    switch(action.type) {
      case('countUp'):
        return {
          ...state,
          count: state.count + 1
        }
      default:
        return state
    }
  }

  const UserReducer = () => {
    const [state, dispatch] = useReducer(myReducer, { count: 0 })

    return (
      <div className="App">
        <button onClick={() => dispatch({ type: 'countUp' })}>
          +1
        </button>
        <p>Count: {state.count}</p>
      </div>
    );
  }
export default UserReducer;

// https://codesandbox.io/s/staging-browser-c2j8q
