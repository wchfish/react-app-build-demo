import React, { useState } from 'react'

import counterImg from '../../assets/image/counter.png'

import './index.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count => count + 1)
  }

  const dec = () => {
    setCount(count => count - 1)
  }

  return (
    <div className="counter-container">
      <div className="title">计数器</div>
      <img
        src={counterImg}
        alt=""
        style={{
          width: 50,
          height: 50,
          objectFit: 'contain',
        }}
      />
      <div className="count">计数：{count}</div>
      <div className="btn-group">
        <button type="button" onClick={dec}>-</button>
        <button type="button" onClick={add}>+</button>
      </div>
    </div>
  )
}

export default Counter
