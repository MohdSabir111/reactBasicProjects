import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./Card";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [filterData, setFilterData] = useState("");
  const [initialData, setInitialData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://dummyjson.com/products");
      let json = await res.json();
      setFilterData(json.products);
      setInitialData(json.products);
    };
    fetchData();
  }, []);

  function filterHandler() {
    let res = initialData.filter((item) =>
      item.title.toLowerCase().includes(inputVal.toLowerCase())
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
          onClick={filterHandler}
        >
          Search
        </button>
      </div>
      <div className=" flex gap-3 justify-center flex-wrap">
        {filterData.length <= 0 ? (
          <h1> No Items</h1>
        ) : (
          filterData.map((item) => (
            <Card
              imageSrc={item.images}
              title={item.title}
              key={item.id}
            ></Card>
          ))
        )}
      </div>
    </>
  );
}

export default App;
