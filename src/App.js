import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import onePieceImg from './assets/image/one_piece.jpeg'

import { Provider } from 'mobx-react'
import appState from './store'
import Home from './pages/Home'
import Bar from './pages/Bar'
import TodoTask from './pages/TodoTask'

const App = () => {
  return (
    <Provider store={appState}>
      <Router>
        {/* 顶部固定内容 */}
        <div>
          <div>demo react app</div>
          <img
            src={onePieceImg}
            alt=""
            style={{
              width: 150,
              height: 150,
              objectFit: 'contain',
            }}
          />
        </div>
        {/* 路由跳转控制 */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bar">Bar</Link>
          </li>
          <li>
            <Link to="/todo">TodoTask</Link>
          </li>
        </ul>
        {/* 路由部分 */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/bar" component={Bar} />
          <Route exact path="/todo" component={TodoTask} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
