import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/tabs/dashboard/Dashboard';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TasksTab from './components/tabs/tasks/TasksTab';
import Websites from './components/tabs/websites/WebsitesTab';
import { useEffect, useState } from 'react';
import { Task, User, Website } from './types';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [websites, setWebsites] = useState<Website[]>([])
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch("data/tasks.json")
      .then(response => response.json())
      .then(data => {
        const mappedTasks: Task[] = data.map((rawTask: any) => {
          {
            return {
              name: rawTask.name,
              category: rawTask.category,
              description: rawTask.description,
              deadline: rawTask.deadline_date === undefined ? undefined : new Date(rawTask.deadline_date + " " + rawTask.deadline_time),
              completed: rawTask.completed
            }
          }
        });

        setTasks(mappedTasks);
      })
      .catch(error => console.error("Error while fetching task data: " + error));

    fetch("data/user.json")
      .then(response => response.json())
      .then(setUser)
      .catch(error => console.error("Error while fetching user data: " + error));

    fetch("data/websites.json")
      .then(response => response.json())
      .then(setWebsites)
      .catch(error => console.error("Error while fetching website data: " + error));
  }, [])

  const addTask = (task: Task) => {
    const newTasks = [...tasks];
    newTasks.push(task);
    setTasks(newTasks);
  }

  const setTask = (index: number, task: Task) => {
    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  }

  const removeTask = (index: number) => {
    const taskToRemove = tasks[index];
    const newTasks = [...tasks].filter(task => task !== taskToRemove);
    setTasks(newTasks);
  }

  const updateTask = (index: number, func: (task: Task) => void) => {
    const task = tasks[index];
    func.call(null, task);
    setTask(index, task);
  }

  return (
    <>
      <Header />
      <div className="app">
        <Navigation user={user} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard tasks={tasks} updateTask={updateTask} websites={websites} />} />
            <Route path="/tasks" element={<TasksTab tasks={tasks} />} />
            <Route path="/websites" element={<Websites websites={websites} />} />
          </Routes>
        </div>
      </div>
    </>


  )
}
