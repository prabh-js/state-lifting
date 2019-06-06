import React from 'react';

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }
    handleOnChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    }
    render() {
        return (
            <fieldset>
                <legend>
                    {this.props.scale === 'F' ? 'Enter farenheit temperature' : 'Enter Celcius temperature'}
                </legend>
                <input
                    value={this.props.temperature}
                    onChange={this.handleOnChange}
                    />
            </fieldset>
        )
    }
    
}
export default TemperatureInput;