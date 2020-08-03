import React, { Component } from 'react'
import "./Todo.css"
export default class Todo extends Component {
    state = {
        input : "",
        items : []
    };    

handleChange = event =>
{
    this.setState({
        input : event.target.value
    });
};

storeData = (event)  => 
{

   event.preventDefault();

    const {input} = this.state;

    this.setState({
        items : [...this.state.items,input],
        input : ""
    });
};


deleteItems = (key) =>
{
    this.setState({
        items : this.state.items.filter((data,index) => index !== key)
    });
}


    render() {
        const {input , items} = this.state;
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeData} >
                    <h1>Todo App</h1>
                    <input type="text" onChange={this.handleChange} value={input} placeholder="Enter Items..."/>
                </form>

                <ul>
                    {items.map((data,index) => (
                        <li key={index}>
                            {data}<i className="fas fa-trash-alt" onClick={()=>this.deleteItems(index)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
