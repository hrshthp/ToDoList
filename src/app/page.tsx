"use client";
import { use, useState } from "react";
import { BBH_Sans_Bartle } from "next/font/google";
const BBH = BBH_Sans_Bartle({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400"],
});
export default function todo() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState<string[]>([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodo([...todo, task]);
    setTask("");
  };
  const deleteTask = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="min-h-screen justify-center items-center flex  bg-[#fdf7f7]">
        <div className="bg-[#fdf7f7] border  border-[#df6186] items-center max-w-md w-full shadow-[#e10945] shadow-2xs  rounded-4xl p-6">
          <h1
            className={`text-3xl font-extrabold my-3 text-[#e10945] justify-between ${BBH.className}`}
          >
            To-Do List
          </h1>
          <div className="flex gap-x-7 mb-3">
            <input
              placeholder="Add task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => e.key == "Enter" && addTask()}
              className="rounded-2xl focus:ring-0 focus:outline-[#df6186] w-full active:ring-[#df6186] p-2 bg-[] justify-between text-[#e45d85] border-[#e45d85]"
            />
            <button className="text-[#e45d85] ml-2" onClick={addTask}>
              Add
            </button>{" "}
          </div>
          <ul className="space-y-2">
            {todo.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between my-0.75 text-[#df6186] space-y-2"
              >
                <span>{todo}</span>
                <button
                  className="text-red-700 text-sm "
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
