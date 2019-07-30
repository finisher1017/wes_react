import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  
  goToStore = (e) => {
    e.preventDefault();
    // get the input from the input
    const storeName = this.myInput.current.value;
    // change the page to /store/input
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
        <React.Fragment>
          <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please select a store.</h2>
            <input 
              type='text' 
              ref={this.myInput} 
              required 
              placeholder="Store Name" 
              defaultValue={getFunName()} />
            <button type='submit'>Visit Store</button>
          </form>
        </React.Fragment>
        )
  }
}

export default StorePicker;