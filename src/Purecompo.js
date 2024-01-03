import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

class Purecompo extends PureComponent{
    constructor() {
        super();
        this.state={
            count:0,
        }

    }
    
    render() {
        console.log(this.state.count)
        return (
            <>
            <h1>
                Count value:{this.state.count}
            </h1>
            <button onChange={()=> this.setState({count: this.state.count+1})}>Click</button>
            </>
        );
    }

}
export default Purecompo;