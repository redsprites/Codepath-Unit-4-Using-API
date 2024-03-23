import { useState } from 'react'
import axios from 'axios'
import './App.css'

interface Data {
  copyright : string
  date : string
  explanation :string
  hdurl : string
  media_type : string
  service_version : string 
  title : string
  url : string
}


function App() {

  const url = `planetary/apod/?api_key=${import.meta.env.VITE_APP_API_KEY}`;
  const [data, setData] = useState <Data>();
  const [banList, setBanList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
 
 
  const fetchData = async () => {
    setLoading(true);
    let attempts = 0;
    const maxAttempts = 10;
  while (attempts < maxAttempts) {
    try {
      const response = await axios.get(url, {
        params: { count: 1 },
      });
      const candidate = response.data[0]; 
      if (!banList.includes(candidate.title) && !banList.includes(candidate.date) && !banList.includes(candidate.explanation)) {
        setData(candidate);
        break;
      }

      attempts += 1;
    } catch (error) {
      console.error('Error fetching data:', error);
      break; 
    }
  }

  if (attempts >= maxAttempts) {
    console.log('Maximum attempts reached without finding an unbanned item.');
  }

  setLoading(false);
};

  const addToBanList = (attributeValue: string) => {
    if (!banList.includes(attributeValue)) {
      setBanList(oldList => [...oldList, attributeValue]);
    }
  };


  return (
    <div className="App">
    <div className="content">
      {data ? (
        <div className="apodData">
          <button onClick={() => addToBanList(data.title)}> <h1>{data.title}</h1></button>
          <button onClick={() => addToBanList(data.date)}> <h2>{data.date.toString()}</h2></button>
          <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
          <button onClick={() => addToBanList(data.explanation)}><p>{data.explanation}</p></button>
        </div>
      ) : (
        <p>{loading ? 'Loading...' : 'Press the button to get a random APOD'}</p>
      )}
      <button onClick={fetchData}>Get Random APOD</button>
    </div>
    <div className="banList">
      <h2>Banned List</h2>
      {banList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  </div>
);
}

export default App