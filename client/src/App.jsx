//import resources
import React from "react";
import $ from "jquery";
//import groceryList from "./groceryList.jsx" //(???)

class App extends Reac.Component {
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
        <groceryList
          groceryListData={this.state.groceryListData}
        />
      </div>
    );
  };

}

export default App;