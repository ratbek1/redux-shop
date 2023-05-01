import React from 'react';
import {useDispatch} from "react-redux";

const BasketTable = ({el}) => {
    const dispatch = useDispatch()
    const delBasket = () => {
        dispatch({type:"DELETE_BASKET", payload:el})
    }
    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const decBasket  = () => {
        dispatch({type: "DEC_BASKET", payload: el})
    }
    return (
        <tr className="bg-black border-2 rounded-b text-white">
            <th scope="col" className="px-6 py-3">
                <img src={el.image} width={100} alt=""/>
            </th>
            <th scope="col" className="px-6 py-3">
                {el.title}
            </th>
            <th scope="col" className="px-6 py-3">
                <div className="flex select-none">
                    <button onClick={decBasket}>-</button>
                    <p className="mx-4">{el.count}</p>
                    <button onClick={addBasket}>+</button>
                </div>
            </th>
            <th scope="col" className="px-6 py-3 select-none">
                {el.price * el.count}$
            </th>
            <th scope="col" className="px-6 py-3">
                <button onClick={delBasket} type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default BasketTable;