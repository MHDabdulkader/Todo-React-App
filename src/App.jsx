import { useState } from 'react'
// import Pages from './component/Page/Pages'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import generateRandomID from './utils/generateRandomId';


function App() {
    // const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState("");
    console.log(todos);

    function saveTodo () {
        if (inputText != "") {
            setTodos([
                ...todos,
                {
                    id: generateRandomID(),
                    title: inputText,
                    status: "Incomplete"
                }
            ]);
            setInputText("")
        }
        else {
            alert("enter text");
        }
    }
    return (
        <div className='max-w-md mx-auto my-20 bg-blue-50 rounded-lg p-8'>
            <div className="space-y-4">
                <h1 className='text-3xl font-bold text-gray-900'>Todo App</h1>

                <form 
                    onSubmit={function(e){
                        e.preventDefault();
                        // add btn kaj korte hobbe. 
                        saveTodo();
                    }}
                >
                    <input
                        value={inputText}
                        onChange={function (e) {
                            setInputText(e.target.value);
                        }}
                        className='border border-gray-300 rounded-md w-full h-9 px-3 '
                        placeholder='Enter todo title'
                        required
                    />

                    <button
                        onClick={saveTodo}
                        className='bg-cyan-600 rounded-md hover:bg-cyan-700 text-white px-4 py-2.5 mt-2'>Submit</button>
                </form>

                {/* <button> Submit</button>  */}


                {/* <dir></dir> */}
                <div className='mt-6 space-y-2'>
                    {/* <h1>{todos}</h1>; */}
                    {todos.map((todo) => (
                        <div key={todo.id} className='flex justify-between'>
                            <div className='flex gap-2'>
                                <input onChange={function (e) {
                                    setTodos(todos.map((el) => {
                                        if (el.id === todo.id) {
                                            return {
                                                ...el,
                                                status: e.target.checked ? 'Complate' : 'Incomplate',
                                            }
                                        }
                                        return el;
                                    }))
                                }} type="checkbox" />
                                <p className={todo.status === 'Complate' ? "line-through" : ""}>{todo.title}</p>
                            </div>
                            <div>
                                <button
                                    onClick={function () {
                                        setTodos(todos.filter((el) => el.id !== todo.id));
                                    }}
                                    className="bg-red-500 rounded-md px-2 py-1 text-xs uppercase text-white">deleted</button>
                            </div>
                        </div>

                    ))}
                </div>

                {todos.length > 0 && <div>
                    <button
                        onClick={function () {
                            setTodos([])

                        }}
                        className='bg-red-500 rounded-md px-3 py-2  captialization text-white w-full'>Deleted All </button>
                </div>}

            </div>






        </div>
    )
}

export default App
