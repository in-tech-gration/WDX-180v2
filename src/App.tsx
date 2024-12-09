import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex flex-col justify-center min-h-screen text-center gap-10">
      <h1 className="text-3xl">WDX-180</h1>
      <p className="text-xl text-slate-500 dark:text-slate-400">
        Web Development X
      </p>
      <p className="text-xl text-slate-500 dark:text-slate-400">
        This is Web Development X 180°. An introductory course to the web and
        related technologies such as HTML, CSS and JavaScript, split into 180
        days.
      </p>
      <div>
        <button
          className="p-2 bg-indigo-500 rounded-md shadow-lg"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
