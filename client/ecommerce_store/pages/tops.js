import { useState, useEffect } from "react";
import axios from "axios";
const Tops = () => {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getItems").then((res) => {
            setListItems(res.data);
        });
    }, []);

    return (
        <div className="items-list">
            {listItems.map((item) => {
                return (
                    <div className="item">
                        <h1>{item.name}</h1>
                        <h2>{item.price}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Tops;
