import React, { useState } from "react";
import removeItem from "./utils/removeItem";

const Counter = (props) => {
    const [itemCount, setItemCount] = useState(1);

    const handleChange = (e) => {
        if (e.target.innerText === '+') {
            setItemCount(itemCount + 1);
        } else if (e.target.innerText === '-') {
            if (itemCount === 1) {
                removeItem(
                    e,
                    props.items,
                    props.setAddedProducts,
                    props.setCartItems
                );
            } else {
                setItemCount(itemCount - 1);
            }
        }
    };

    // The only thing added here is this, when the itemCount will change the useEffect will fire and update the cartItem's itemCount property
    // I don't know if there is a better way to do this but I have to use map to loop over and then use setCartItem to the new value
//     useEffect(() => {
//         const newItem = props.cartItems.map((elem) => {
//             if (elem.id === props.item.id) {
//                 elem.itemCount = itemCount;
//             }
//             return elem;
//         });
//         // props.setCartItems(newItem);
//     });

    return (
        <div className="increment-decrement">
            <button value={props.item.id} onClick={handleChange}>
                -
            </button>
            <span>{itemCount}</span>
            <button
                value={props.item.id}
                onClick={handleChange}
                disabled={props.item.inventory === itemCount}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
