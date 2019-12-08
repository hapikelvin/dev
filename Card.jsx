import React, {Component} from 'react';
import { file } from '@babel/types';

class Card extends Component    {
    constructor(props)  {
        super(props);

        this.state = {
            side: "front"
        };
    };

    flipSide = () => {
        console.log("hit")
        this.setState({
            side: this.state.side === "front" ? "back" : "front"
        });
    };

    render()    {
        return(
            <div className="card" onClick={() => this.flipSide()}>
                {this.state.side === "front" ? <img src={this.props.front} width="500px" /> : <img src={this.props.back} width="500px" /> }
            </div>
        );
    }
}

export default Card;