import "./App.css";
import { useState } from "react";

function App() {
  const [promiseValue, SetPromiseValue] = useState("");

  async function test() {
    let displayValue = await setTimeout(() => {
      return "Hello there general kenobi";
    }, 2000);
  };
  SetPromiseValue(test());

  //let promiseTest = new Promise((resolve, reject) => {
  //  setTimeout(() => {
  //    setTimeout(resolve("Worked"), 4000);
  //  }, 1000);
  //
  //  setTimeout(() => {
  //    reject("?");
  //  }, 2000);
  //});
  //
  //promiseTest.then(
  //  (response) => SetPromiseValue(response),
  //  (response) => SetPromiseValue(response)
  //);


  return (
    <div>
      <div className="bg-slate-500 min-h-screen z-10">
        <p className="text-blue-300 hover:text-red-500">{promiseValue}</p>
      </div>
    </div>
  );
}
export default App;
