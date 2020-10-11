import React from 'react'

import Counter from '../../components/Counter'
import Foo from '../../components/Foo'

const Home = (props) => {
  return (
    <div className="home-page">
      这是主页
      <Counter />
      <Foo
        foo="abc"
      />
    </div>
  )
}

export default Home
