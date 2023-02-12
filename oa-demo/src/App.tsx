import { useState, Component, ReactNode } from 'react'
import { Button } from 'antd';
import './App.css'

class Task extends Component {

  render(): ReactNode {
    return (
      <div className="task-box">
        <h2 className='title'> TSAK OA 任务管理器 </h2>
        <Button type="primary" >Primary Button</Button>
      </div>
    )
  }
}


function App() {

  return (
    <div className="App">
      <Task />
    </div>
  )
}

export default App
