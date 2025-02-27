export default function TaskColumn(props) {
    return(
        <div className="columns-[33.3vw] p-3 min-h-80 relative">
            <h2 className="text-2xl font-bold text-gray-800"> {props.title}</h2>
            <div className="">
                <button className="absolute right-3 bottom-3 px-3 py-2 bg-emerald-500 text-black hover:text-white rounded-sm font-semibold hover:bg-emerald-600 cursor-pointer ease-in-out duration-300">Add Task</button>
            </div>
        </div>
    )
}
