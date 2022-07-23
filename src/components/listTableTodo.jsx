import { useState } from 'react';
const ListTaleTodo = ({ data, onUpdate, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState("")

    const handleUpdateInput = (e) => {
        const value = e.target.value
        setValue(value)
    }

    const handleClickUpdate = () => {
        update()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        update()
    }

    const update = () => {
        onUpdate(isEdit, value)
        setIsEdit(false)
    }

    const handleResetEdit = () => {
        setIsEdit(false)
        setValue("")
    }

    return (
        <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
            <thead className="bg-green-100 dark:bg-slate-700">
                <tr>
                    <th className="w-[10%] border text-center border-slate-300 dark:border-slate-600 font-semibold p-2 text-slate-500 dark:text-slate-200">ID</th>
                    <th className="w-[80%] border text-center border-slate-300 dark:border-slate-600 font-semibold p-2 text-slate-500 dark:text-slate-200">NAME</th>
                    <th className="w-[10%] border text-center border-slate-300 dark:border-slate-600 font-semibold p-2 text-slate-500 dark:text-slate-200">OPTION</th>
                </tr>
            </thead>
            <tbody>
                { data.length > 0 ? data.map((item, index) => {
                    return (
                        <tr key={item.id} onMouseLeave={handleResetEdit}>
                            <td className="border text-center border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400"> {index + 1} </td>
                            <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                                {
                                    isEdit == item.id ? <form onSubmit={handleSubmit}><input type="text" defaultValue={item.title} placeholder="Edit nueva nota..." className="font-sans block text-sm leading-5 w-full py-1 px-3 border border-green-600 text-slate-500 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-green-200 focus:border-green-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:bg-slate-900 dark:border-green-500 dark:focus:ring-green-900 dark:focus:border-green-600" onChange={handleUpdateInput} /></form> : item.title
                                }
                            </td>
                            <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                                <div className="flex items-center justify-center space-x-2">
                                    {
                                        isEdit == item.id ? <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClickUpdate} className="h-5 w-5 text-yellow-400 cursor-pointer hover:text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsEdit(item.id)} className="h-5 w-5 text-blue-400 cursor-pointer hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    }
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => onDelete(item.id)} className="h-5 w-5 text-red-400 cursor-pointer hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    )
                }) : <tr><td colSpan={3} className="border text-center border-slate-300 dark:border-slate-700 p-2 text-slate-400 dark:text-slate-400">No hay data en la lista</td></tr>}
            </tbody>
        </table >
    );
}

export default ListTaleTodo;