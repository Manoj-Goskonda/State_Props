import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Input = (props) => {
  const [data, setData] = useState();
  const [state, setState] = useState([]);
  const [formData, setFormData] = useState([]);

  const onChangeHandle = (e) => {
    setData(e.target.value);
    console.log("Name is typing ==>>", e.target.value);
  };

  const onHandleButton = (e) => {
    let arr = [];
    arr.push(e.target.value);
    setData(arr);
    let updatedFormData = props.formData;
    updatedFormData.push({ data });
    props.setFormData(updatedFormData);
    console.log("Submit ==>>", data);
    props.getDataSend(data);
    e.preventDefault();
  };

  return (
    <>
      <div className="input">
        <div className="input_text">
          <input type="text" value={data} onChange={onChangeHandle} />
        </div>
        <div>
          <Button className="Btn" onClick={onHandleButton}>
            Click Me
          </Button>
        </div>
      </div>
    </>
  );
};

export default Input;
