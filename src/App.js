import {useState} from 'react'
import Main from "./pages/Main";
import FormContext from "./context/formContext";
function App() {

  const [toogle, setToggle] = useState(true)
  return (
    <FormContext.Provider value={{toggle : toogle, setToggle : setToggle}}>
      <div className="App">
        <Main />
      </div>
    </FormContext.Provider>
  );
}

export default App;
