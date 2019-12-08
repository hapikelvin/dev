import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import SortedList from "./SortedList";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      occupation: "all",
      personality: "all"
    };
  }

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectOccFilter = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({occupation: event});
  };

  onSelectPersFilter = event => {
    this.setState({personality: event});
  }

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesOccFilter = item => {
    // TODO: add conditions to check if item type is equal to selected type
    return this.state.occupation === "all" || item.occ === this.state.occupation;
  }

  matchesPersFilter = item =>   {
      return this.state.personality === "all" || item.pers === this.state.personality;
  }

//   matchesFilterType = item => {
//     // TODO: add conditions to check if item type is equal to selected type
//     console.log(this.state.occupation);
//     // return (this.state.occupation.length === 0 || this.state.occupation.find(occ => item.occ === occ));
//   }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return this.matchesOccFilter(item) && this.matchesPersFilter(item);
  }

  render() {
    return (
      <div className="filter-list">
        <div className="htext">
          <h1>ADOPT A CH*CK</h1>
          <h4>Want to own a ch*ck for yourself? Click on each one to learn more about it! Then, filter and sort through our 
            selection based on occupation, age, and/or personality to decide which ch*ck is perfect for you!
          </h4>
        </div>
        {/* TODO: Add more menu items with onSelect handlers*/}
        <DropdownButton className="button1" title="Occupation" id="dropdown">
          <Dropdown.Item eventKey="all" onSelect={this.onSelectOccFilter}>All</Dropdown.Item>
          <Dropdown.Item eventKey="real" onSelect={this.onSelectOccFilter}>Real</Dropdown.Item>
          <Dropdown.Item eventKey="fake" onSelect={this.onSelectOccFilter}>Fake</Dropdown.Item>
        </DropdownButton>

        <DropdownButton className="button2" title="Personality" id="dropdown">
          <Dropdown.Item eventKey="all" onSelect={this.onSelectPersFilter}>All</Dropdown.Item>
          <Dropdown.Item eventKey="grumpy" onSelect={this.onSelectPersFilter}>Grumpy</Dropdown.Item>
          <Dropdown.Item eventKey="shy" onSelect={this.onSelectPersFilter}>Shy</Dropdown.Item>
          <Dropdown.Item eventKey="vain" onSelect={this.onSelectPersFilter}>Vain</Dropdown.Item>
        </DropdownButton>
        <SortedList items={this.props.items.filter(this.filterAndSearch)} />
      </div>
    );
  }
}

export default FilteredList;
