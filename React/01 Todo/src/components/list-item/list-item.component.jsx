import { useState } from "react";

import "./list-item.style.css"


function ListItem({ list, deleteItem, editItem }) {
    const [expand, setExpand] = useState(false);
    const [item, setItem] = useState(list.todo);


    function handleChange(event){
        setItem(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="">
            <div className="to-do-container">
                <div className="">
                    {list.todo}
                </div>

                <div className="modification">
                    <p onClick={() => setExpand(!expand)}>✒️</p>
                    <p onClick={() => deleteItem(list)}>❌</p>
                </div>
            </div>

            {expand && (
                <div className="form edit-form">
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Edit the Item"
                        name="todo"
                        value={item}
                    />
                    <button
                        className="add-button"
                        disabled={item.trim().length === 0}
                        onClick={() => {
                            editItem(list,item);
                            setExpand(false);
                        }}
                    >
                        <span>EDIT</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default ListItem;
