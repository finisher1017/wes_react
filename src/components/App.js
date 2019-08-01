import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  
  state = {
    fishes: {},
    order: {}
  }
  
  addFish = fish => {
    // Make a copy of the existing state
    const fishes = {...this.state.fishes};
    // Add our fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({
      fishes
    });
  }
  
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }
  
  addToOrder = (key) => {
    // Make a copy of state
    const order = {...this.state.order};
    // Either add order, or increment order qty
    order[key] = order[key] + 1 || 1;
    // call setState to update out state object
    this.setState({ order });
  }
  
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="Menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} 
                                                             index={key}
                                                             details={this.state.fishes[key]} 
                                                             addToOrder={this.addToOrder}
                                                       />)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;