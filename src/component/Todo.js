import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  //adding the items
  const addItem = () => {
    if (!inputData) {
      alert("pls fill the text");
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };

  //deleting the items
  const deleteItems = (id) => {
    const update = item.filter((elem, ind) => {
      return ind !== id;
    });
    setItem(update);
  };
  //removing the items
  const removeAll = () => {
    setItem([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <i className="fa-solid fa-file  size"></i>
          <h1>Add your text here..</h1>
          <div className="additems">
            <input
              type="text"
              placeholder="add items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add item"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {item.map((elem, id) => {
              return (
                <div className="eachItem" key={id}>
                  <h3>{elem}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete item"
                    onClick={() => deleteItems(id)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All "
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
