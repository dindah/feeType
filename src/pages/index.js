import React, { Component } from 'react';
import FeeTypePage from './feetype-page';

class FeeType extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render () {
        
        return (
            <div className="app flex-row align-items-center white-background">
                <FeeTypePage />
            </div>
        );
    }
}


export default FeeType;
