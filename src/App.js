import './App.css';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text : "Go to the gym",
            day: "Friday",
            reminder: false
        },
        {
            id: 2,
            text : "Go to the doctor",
            day: "Saturday",
            reminder: true
        },
        {
            id: 3,
            text : "Go to the beach",
            day: "Snunday",
            reminder: false
        }
    ])
    //DeleteTask
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=> task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map(
            (task) =>
                task.id === id ?
                    {...task, reminder: !task.reminder } : task
        ))
    }

  return (
    <div className="container">
        <Header title = "Hello" />
        <AddTask />
        {tasks.length > 0 ? <Tasks onDelete = {deleteTask} onToggle = {toggleReminder}  tasks = {tasks} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
