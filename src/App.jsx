import { useState } from 'react';
import './App.css';
import Img from './Component/Img';

function App() {

  const url = "https:/api.unsplash.com/search/photos?page=1";
  const accessKey = "JQipdgO6JJfIYQFT-bd292MiVm6mauM4ejZ0o_SefYs";

  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);

  const searchHandler = async (search) => {
    const res = await fetch(`${url}&query=${search}&client_id=${accessKey}`);
    const data = await res.json();
    setInfo(data.results);
  }

  useState(() => {
    searchHandler("photo");
  }, []);

  console.log(info);


  return (
    <div className="App">
      <header>
        <h1>Gallery</h1>
        <form name='search' action={() => searchHandler(search)} className='search'>
          <input type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search.....' />
          <button><i className="fi fi-br-search"></i></button>
        </form>
      </header>
      <main>
        {info?.length > 0 ? (
          <>{info.map((img, id) => (<Img info={img} key={id} />))}</>
        ) : (
          <h3 className='empty'>Not found</h3>
        )}
      </main>
    </div>
  );
}

export default App;
