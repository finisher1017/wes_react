import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {
  
  state = {
    fishes: {},
    order: {}
  }
  
  static propTypes = {
    match: PropTypes.object
  }
  
  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  
  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }
  
  componentWillUnmount() {
    base.removeBinding(this.ref);
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
  
  updateFish = (key, updatedFish) => {
    // Make a copy of a current state
    const fishes = {...this.state.fishes};
    // Update that state
    fishes[key] = updatedFish;
    // Set that to state
    this.setState({ fishes });
  }
  
  deleteFish = key => {
    // Make a copy of state
    const fishes = {...this.state.fishes};
    // Update the state
    fishes[key] = null;
    // Update state
    this.setState({ fishes });
  }
  
  removeFromOrder = key => {
    console.log('Removing Fish!!');
    // Make a copy of state
    const order = {...this.state.order};
    // Update the state
    delete order[key];
    // Update state
    this.setState({ order });
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
        <Order
          removeFromOrder={this.removeFromOrder}
          fishes={this.state.fishes} 
          order={this.state.order} />
        <Inventory 
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    )
  }
}

export default App;