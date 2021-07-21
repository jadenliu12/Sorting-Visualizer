import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setArray} from '../states/SortBar-actions.js';

import './SortBar.css';

class SortBar extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        total: PropTypes.number,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(setArray(100, 500, 10));
    }

    render() {
        const {arrayBar, total} = this.props;  
        
        let children = (<div></div>);
        if (arrayBar.length) {
            children = arrayBar.map((val, idx) => (
                <div 
                    className='array-bar' 
                    key={idx}
                    style={{
                        backgroundColor: '#BBECFF',
                        height: `${val}px`,
                    }}
                />
            ))
        }
        
        return (
            <div className="sortBarContainer">
                {children}
            </div>
        )
    }
}

export default connect(state => ({
    ...state.sortBar,
}))(SortBar);