import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired
    }


    render() {
        // console.log(this.props)
        const { todos, changeToDo, deleteToDo } = this.props;

        return (
            <ul className="todo-main">

                {
                    todos.map(todo => {
                        // return <Item key={todo.id} name={todo.name} done={todo.done} />
                        return <Item key={todo.id} {...todo} changeToDo={changeToDo} deleteToDo={deleteToDo} />
                    })
                }

            </ul>
        )
    }
}


