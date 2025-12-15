"use client";
import { use, useState } from "react";
import { BBH_Sans_Bartle } from "next/font/google";
import { Poppins } from "next/font/google";
const BBH = BBH_Sans_Bartle({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const pops = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
});
export default function todo() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState<string[]>([]);

  const cap = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  const addTask = () => {
    if (!task.trim()) return;
    setTodo([...todo, cap(task.trim())]);
    setTask("");
  };
  const deleteTask = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="min-h-screen justify-center items-center flex  bg-[#fee4e4]">
        <div className="bg-[#fdf7f7] border-1.3  border-[#df6186] items-center max-w-md w-full shadow-[#e10945] shadow-2xs  rounded-4xl p-6">
          <h1
            className={`text-3xl mb-3 font-extrabold my-3 text-[#e10945] justify-between ${BBH.className}`}
          >
            To-Do List
          </h1>
          <div className="flex gap-x-7 mb-3">
            <input
              placeholder="Add task..."
              value={task}
              onChange={(e) => {
                const value = e.target.value;
                setTask(value.charAt(0).toUpperCase() + value.slice(1));
              }}
              onKeyDown={(e) => e.key == "Enter" && addTask()}
              className="rounded-2xl focus:ring-0 focus:outline-[#df6186] focus:outline-border-1.3 w-full active:ring-[#df6186] p-2 bg-[] justify-between text-[#e45d85] border-[#e45d85]"
            />
            <button
              className={`text-[#e45d85] ml-2 ${BBH.className} hover:rounded-full p-2 hover:cursor-pointer hover:text-[#fdf7f7] hover:bg-[#df6186]`}
              onClick={addTask}
            >
              Add
            </button>{" "}
          </div>
          <ul className={` ${pops.className}`}>
            {todo.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between mt-2 text-[#df6186] space-y-2"
              >
                <span>{todo}</span>
                <button
                  className={` text-red-600 ${pops.className} hover:rounded-full p-2 hover:cursor-pointer hover:text-[#fcfcfc] hover:bg-[#c50000]`}
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
