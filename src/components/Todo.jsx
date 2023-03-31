import React from 'react'

export default function Todo() {

  let todoArr = [{
    task: "hello",
    id: 1
  },
  {
    task: "hello2",
    id: 2
  },{
    task: "hell3",
    id: 3
  },
]
  return (
    <div>
      <input type='text'></input>
      <button>Add todo</button>
      {/* <div>{todoArr.forEach((todoArr) => {
       let renderedTask = todoArr.tasks
        console.log(renderedTask)
        return renderedTask
      })}</div> */}
      <div>{todoArr.forEach((taskObject) => {
        return taskObject.id;
      })}</div>
    </div>
  )
}
