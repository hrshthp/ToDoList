"use client";
import { use, useState } from "react";
import { BBH_Sans_Bartle } from "next/font/google";
import { Poppins } from "next/font/google";
import Image from "next/image";
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
  const [todo, setTodo] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const cap = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  const addTask = () => {
    if (!task.trim()) return;
    setTodo([
      ...todo,
      { id: Date.now(), text: cap(task.trim()), completed: false },
    ]);
    setTask("");
  };
  const toggleTask = (id: number) => {
    setTodo(
      todo.map((item, i) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="min-h-screen justify-center items-center flex  bg-linear-to-r from-pink-400 via-rose-200 to-pink-400 animate-gradient">
        <div className="bg-[#fdf7f7] border-1.3 my-10  border-[#df6186] items-center max-w-md mx-10 w-full shadow-[#e10945] shadow-2xs  rounded-4xl p-6">
          <h1
            className={`text-3xl mb-6 font-extrabold my-3 text-[#e10945] justify-between ${BBH.className}`}
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
              className={`text-[#e45d85] ml-2 ${BBH.className} hover:rounded-full p-2 hover:cursor-pointer hover:scale-100 hover:text-[#fdf7f7] hover:bg-[#df6186]`}
              onClick={addTask}
            >
              Add
            </button>{" "}
          </div>
          <ul className={`ml-3 ${pops.className} `}>
            {[...todo]
              .sort((a, b) => Number(a.completed) - Number(b.completed))
              .map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between text-[#d43162] mb-2.5 items-center "
                >
                  <span
                    className={`cursor-pointer mr-5 flex-1 break-all  ${
                      item.completed ? "line-through opacity-50" : ""
                    }`}
                  >
                    {item.text}
                  </span>
                  <div className="flex">
                    <Image
                      src="/check-mark.png"
                      alt="Complete task"
                      width={20}
                      height={20}
                      className="cursor-pointer hover:scale-110  mr-3"
                      onClick={() => toggleTask(item.id)}
                    />

                    <Image
                      src="/delete.png"
                      alt="Complete Task"
                      width={21}
                      height={21}
                      onClick={() => deleteTask(item.id)}
                      className="cursor-pointer hover:scale-110"
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
