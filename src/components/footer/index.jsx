import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired
        // clearAllDone: PropTypes.func.isRequired

    }

    handlecheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)

    }

    handleClearAllDone = () => {
        this.props.clearAllDone()
    }


    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        // console.log('count', doneCount);

        const totalCount = todos.length
        // console.log('total', totalCount)


        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handlecheckAll} checked={doneCount === totalCount && totalCount !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{totalCount}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
