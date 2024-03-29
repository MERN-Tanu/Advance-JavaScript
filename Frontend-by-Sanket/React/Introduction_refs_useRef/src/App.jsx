import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { FormContext } from "./providers/FormContext";

function App() {
  const [formInput, setFormInput] = useState({});
  return (
    <div>
      Form Application
      <FormContext.Provider value={{ formInput, setFormInput }}>
        <Form />
      </FormContext.Provider>
    </div>
  );
}

export default App;
