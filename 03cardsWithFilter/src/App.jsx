import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./Card";
import { data } from "./data";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [filterData, setFilterData] = useState(data);

  function filterHandler() {
    let res = data.filter((item) =>
      item.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setFilterData(res);
  }

  return (
    <>
      <div className="flex justify-center gap-2 ">
        <input
          type="text"
          placeholder="Kya chahiye..?"
          onChange={(event) => setInputVal(event.target.value)}
          className="my-5 p-2 bg-blue-200 rounded-3xl"
        />
        <button
          className="bg-slate-400 rounded-3xl  px-7 my-5 hover:bg-slate-500 delay-100"
          onClick={filterHandler}>
            
          Search
        </button>
      </div>
      <div className=" flex gap-3 justify-center flex-wrap">
        {filterData.map((item) => (
          <Card imageSrc={item.image} title={item.name} key={item.id}></Card>
        ))}
      </div>
    </>
  );
}

export default App;
