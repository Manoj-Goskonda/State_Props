import React, { useState } from "react";
import Input from "./Components/Input";
import Result from "./Components/Result";

const App = () => {
  const [getSolutionDataObject, setSolutionDataObject] = useState({});
  const [formData, setFormData] = useState([{ name: "" }]);

  const getDataSend = (data) => {
    console.log("inside Parent ======>", data);
    let dataobj = {};
    dataobj.data = data;
    setSolutionDataObject(dataobj);
  };

  return (
    <div>
      <Input
        getDataSend={getDataSend}
        formData={formData}
        setFormData={setFormData}
      />
      <Result
        getSolutionDataObject={getSolutionDataObject}
        formData={formData}
      />
    </div>
  );
};

export default App;
