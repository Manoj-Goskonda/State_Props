import React from "react";

const Result = (props) => {
  return (
    <>
      <form>
        {props.formData.map((item) => {
          return (
            <>
              <div className="m-2 card card_data">
                <div className="card-body">
                  <p className="card-title">{item.data}</p>
                </div>
              </div>
            </>
          );
        })}
      </form>
    </>
  );
};

export default Result;
