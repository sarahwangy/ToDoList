import React, { Component } from 'react'

import Header from './components/header';
import List from './components/list';
import Footer from './components/footer';


export default class App extends Component {
  state = {
    todos: [
      { id: '01', name: '吃饭', done: true },
      { id: '02', name: '吃1', done: false },
      { id: '03', name: 'wan', done: true },
    ]
  }

  addToDo = (todoObj) => {
    // console.log('app', data)
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })

  }


  changeToDo = (id, done) => {
    const { todos } = this.state;

    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
    console.log('app', this.state)

  }

  // 获取子组件的结果当做参数穿进去
  deleteToDo = (id) => {
    // 获取之前的todos状态
    const { todos } = this.state;
    // 新的状态state是什么
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })

    // 更新setstate  最新的state， 然后render
    this.setState({ todos: newTodos })
  }

  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done }

    })
    this.setState({ todos: newTodos })
  }


  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      // return !todoObj.done
      return todoObj.done === false
    })

    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state

    return (

      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo} />
          <List todos={todos} changeToDo={this.changeToDo} deleteToDo={this.deleteToDo} />
          <Footer todos={todos} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
