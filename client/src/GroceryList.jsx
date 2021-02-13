import React from "react";
import App from "./App.jsx";

function GroceryList (props) {
  //console.log("props: ", props);
  return (
    <div>
      {props.groceryListData.map(groceryItem => {
        return (
          <h2>
            name: {groceryItem.itemName}, {groceryItem.quantity}
          </h2>
        );
      })};
    </div>
  );
}

export default GroceryList;