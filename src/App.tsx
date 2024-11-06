import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-500 bg-yellow-200">
        Tailwind CSS Test Heading
      </h1>
      <div>
        <div className="bg-slate-500">nav</div>
        <div className="w-full flex flex-row">
          <div className="bg-red-400 w-full hidden lg:block">aside</div>
          <div className="bg-red-500 w-full">main</div>
        </div>
      </div>
    </>
  );
}

export default App;
