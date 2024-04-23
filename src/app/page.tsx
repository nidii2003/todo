"use client"

import { useState } from "react"

export default function Home() {
  //define state
  const [todos, setTodos] = useState([
    { todo: "I have to visit home tomorrow!", id: 1 },
  ]);

  const [inputVal, setInput] = useState("")
  const [inputid, setId] = useState(0)
  // console.log(inputVal,inputid)

  //functions

  const addtodo = () => {
    let obj: any = todos.find(item => item.id == inputid)
    if (obj) {
      const newArray = todos.filter(item => item.id != obj.id)
      setTodos([...newArray, { todo: inputVal, id: inputid }])
      setInput("")
      setId(0)
      return
    }

    setTodos([...todos, { todo: inputVal, id: inputid }])
    setInput("")
    setId(0)
  }

  const editTodo = (id: any) => {
    let obj: any = todos.find(item => item.id == id)
    setInput(obj.todo)
    setId(obj.id)
    // console.log(obj)
  }

  const delTodo = (id: any) => {
    const newArray = todos.filter(item => item.id != id)
    setTodos([...newArray])
  }
  return (
    <div className='max-w-5xl mx-auto pt-5 mt-8'>
      {/* upper content */}
      <div className="mb-[50px] lg:mb-[70px]">
        <h1 className='text-4xl font-serif text-center font-bold '>TODO APP</h1>
        {/* input div */}
        <div className='flex justify-center mt-10 text-lg lg:gap-4 gap-2'>
          <input
            placeholder='write text here'
            type="text"
            value={inputVal}
            onChange={(e) => setInput(e.target.value)}
            className='shadow border-b bg-[#eeeeee] focus:outline-none py-3 px-4 rounded w-[45%]' />
          <input
            placeholder='write id'
            type="number"
            value={inputid}
            onChange={(e: any) => setId(e.target.value)}
            className='shadow border-b bg-[#eeeeee] focus:outline-none py-3 px-3 rounded w-[10%]' />
          <button
            onClick={addtodo}
            className='bg-gray-900 hover:bg-gray-700 text-white rounded-md cursor-pointer text-base py-2 px-4'>Add Todo</button>
        </div>
        {/* input div end */}
      </div>
      {/* lower content */}
      <div >
        <h1 className='text-3xl text-center font-serif font-semibold mt-8 '>Todo List</h1>
        {/* grid items */}
        <div className="flex flex-col mx-auto gap-4 mt-8 px-4 max-w-3xl">
          {
            todos.map((item: any, index: number) => {
              return (
                <div className='shadow-md pb-1 pt-2 px-3 ' key={index}>
                  <div className='flex justify-between'>
                    <span className='shadow rounded-full h-5 w-6 text-center pb-6'>{index + 1}</span>
                    <span onClick={() => delTodo(item.id)} className='shadow rounded-full h-5 w-6 text-center pb-6 text-red-600 cursor-pointer font-semibold'>X</span>
                  </div>
                  {/* data div */}
                  <div className='text-xl text-gray-800 mt-4'>{item.todo}</div>
                  <div onClick={() => editTodo(item.id)} className='text-right cursor-pointer '>Edit</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}