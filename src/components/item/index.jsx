import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {



    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            // console.log(flag)
            this.setState({ mouse: flag })
            // console.log(this.state)
        }
    }

    handleCheck = (id) => {
        return (event) => {
            // console.log(event.target.checked, id)
            this.props.changeToDo(id, event.target.checked)
            console.log(this.props)
        }

    }

    handleDelete = (id) => {
        if (window.confirm('确定删除吗？')) {
            this.props.deleteToDo(id)
        }
    }

    render() {
        // console.log(this.props)

        const { id, name, done } = this.props;
        const { mouse } = this.state;

        return (
            <li style={{ background: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span> {name} </span>
                </label>
                {/* 可以在这里面写回调，也可以 */}
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
