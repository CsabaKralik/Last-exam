import React, { useEffect, useState } from "react";
import Laptop from "./components/Laptop";
import LoadingMask from "./components/LoadingMask";
import Header from "./components/Header";

const url = "https://demoapi.com/api/laptop";

const fetchLaptop = async () => {
  const res = await fetch(url);
  return res.json();
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState([]);
  const [sorting, setSorting] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchLaptop().then((laptops) => {
      setLaptops(laptops);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    {
      sorting
        ? setLaptops(
            laptops.sort((a, b) => {
              return a.weigth - b.weigth;
            })
          )
        : setLaptops(
            laptops.sort((a, b) => {
              return b.weigth - a.weigth;
            })
          );
    }
    console.log(laptops);
  }, [sorting]);

  return (
    <div>
      <Header
        sorting={sorting}
        setSorting={setSorting}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {loading ? (
        <LoadingMask />
      ) : (
        laptops.map((laptop) => {
          if (laptop.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return <Laptop key={laptop.name} {...laptop} />;
          }
        })
      )}
    </div>
  );
};

export default App;
