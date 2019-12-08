import React, {Component} from 'react';
import Card from './Card';
import { DropdownButton, Dropdown } from "react-bootstrap";

class SortedList extends Component {
  constructor(props)  {
    super(props);

    this.state = {
      sortMode: "descend"
    };
  };

  renderList() {
    const sorted = this.state.sortMode === "ascend" ? this.props.items.sort((a,b) => (a.age - b.age)) : this.props.items.sort((a,b) => (b.age >= a.age) ? 1 : -1);
    const items = sorted.map(item => {
      return <li><Card front={item.image} back={item.info}/></li>
    });

    return items;
  }

  onSelect = event =>   {
    this.setState({
      sortMode: event
    });
  }

  render() {
    return (
      <div className="sorted-list">
        {/* <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div> */}
        <DropdownButton className="button0" bsClass="button0" title="Sort" id="dropdown">
          <Dropdown.Item eventKey="descend" onSelect={this.onSelect}>Default</Dropdown.Item>
          <Dropdown.Item eventKey="ascend" onSelect={this.onSelect}>Young to Old</Dropdown.Item>
        </DropdownButton>
        <ul className = "list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default SortedList; 
