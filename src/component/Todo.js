import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isEditItem,setIsEditItem]=useState(null);

  //adding the items
  const addItem = () => {
    if (!inputData) {
      toast.error("pls fill the text",{
        position: "top-center",
        draggable: true,
        progress: undefined,
        
      });

      
     
    } else if(inputData && !toggle) {

      setItem(
        item.map((elem)=>{
          if(elem.id===isEditItem){
            return{...elem,name:inputData}
          }
          return elem;
        })
      )
      setToggle(true);
    setInputData('');
    setIsEditItem(null);
    }
      else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, allInputData]);
      setInputData("");
    }
  };

  //editind the existing items.
  const editItems = (id) => {
    let newEdit = item.find((elem) => {
      return elem.id === id;
    });
    setToggle(false);
    setInputData(newEdit.name);
    setIsEditItem(id)
  };

  //deleting the items
  const deleteItems = (index) => {
    const update = item.filter((elem) => {
      return index !== elem.id;
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
            {toggle ? (
              <i
                className="fa fa-plus add-btn"
                title="Add item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="submit item"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {item.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit item"
                      onClick={() => editItems(elem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete item"
                      onClick={() => deleteItems(elem.id)}
                    ></i>
                  </div>
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
          <ToastContainer className="foo" style={{ fontSize: "20px",color:"black" }}/>
        </div>
      </div>
    </>
  );
};

export default Todo;
