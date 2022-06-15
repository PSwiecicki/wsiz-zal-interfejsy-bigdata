import './App.css';
import {data} from "./data";
import {Input} from "./Components/Input";
import {useState} from "react";

function App() {
  const [fieldsValues, setFieldsValues] = useState({});
  const [avg, setAvg] = useState(0);

  const setFieldValue = (fieldName, fieldValue) => {
    setFieldsValues((prevState => {
      const newState = {
        ...prevState,
      }
      newState[fieldName] = fieldValue;
      return newState;
    }))
    setAvg(getAverage());
  }

  const getAverage = () => {
    let sum = 0;
    let num = 0;
    for (const key in fieldsValues) {
      sum += fieldsValues[key];
      num+=1;
    }
    return Math.round((0.14+sum/num) * 20000) / 100;
  }

  const getResponseText  = `Szansa na odejście klienta: ${avg}%`;
  
  return (
    <div className="App"><br /><br />
      {
        data.map(inputData => {
          return <div key={inputData.field}><Input name={inputData.field} options={inputData.options} onValueChane={setFieldValue}/> <br /><br /></div>
        })
      }
      <br/>
      <div>{getResponseText}</div>
    </div>
  );
}

export default App;
