import { useState } from "react";

function InputArea(props) {
    const [item, setItem] = useState("");

    function handleChangeItem(event) {
        const val = event.target.value;
        setItem(val);
    }

    return (
        <div className="form">
            <input
                type="text"
                onChange={handleChangeItem}
                placeholder="Add new item"
                name="todo"
                value={item}
            />

            <button
                disabled={item.trim().length === 0}
                onClick={() => {
                    props.addItem({
                        id: Math.floor(Math.random() * 1000000 + 1),
                        todo: item,
                    });
                    setItem("");
                }}
            >
                Add
            </button>
        </div>
    );
}

export default InputArea;
