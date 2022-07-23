const InputNota = ({title, addNota, inputChange}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        addNota(title)
    }

    return (
        <form onSubmit={handleSubmit} className='flex items-center justify-center space-x-3'>
            <input type="text" value={title} placeholder="Ingrese nueva nota..." className="font-sans block text-sm leading-5 w-full py-2 px-3 border-2 border-green-600 text-slate-500 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-green-200 focus:border-green-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:bg-slate-900 dark:border-green-500 dark:focus:ring-green-900 dark:focus:border-green-600" onChange={inputChange} />
            <button className="py-2 px-16 bg-green-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-green-500/50 focus:outline-none">Save</button>
        </form>
    );
}

export default InputNota;