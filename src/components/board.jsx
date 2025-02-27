import TaskColumn from "./column";


export default function Board(){
    return (
        <div className="board-container">
            <div className="header-container">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty">Task Board</h2>
            </div>
            <div className="task-container flex mt-10 border divide-x">
                <TaskColumn title="To Do" />
                <TaskColumn title="In Progress"/>
                <TaskColumn title="Done"/>
            </div>
        </div>
    )
}