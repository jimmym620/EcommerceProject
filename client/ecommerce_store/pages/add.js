import axios from "axios";
import { useState } from "react";

const Add = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const createItem = () => {
        axios
            .post("http://localhost:3001/createItem", {
                name,
                price,
                category,
            })
            .then((res) => {
                alert("item created!");
            });
    };

    return (
        <div>
            <h1>Add your item here</h1>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <input
                type="number"
                placeholder="Price"
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Category"
                onChange={(e) => {
                    setCategory(e.target.value);
                }}
            />
            <button onClick={createItem}>Create Item</button>
        </div>
    );
};

export default Add;
