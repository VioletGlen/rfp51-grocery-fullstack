//import resources
import React from "react";
import $ from "jquery";
import GroceryList from "./GroceryList.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryListData: [{itemName: "temporaryFake 1", quantity: 1}, {itemName: "temporaryFake 2", quantity: 2}],
    };
  };


//componentDidMount //(???)


  render () {
    return (
      //console.log(app rendering successfully);
      <div>
        <GroceryList
          groceryListData={this.state.groceryListData}
        />
      </div>
    );
  };

}

export default App;