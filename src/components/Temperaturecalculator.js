import React from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'C',
            temperature: ''
        }
    }
    handleOnFarenheitChange = (temperature) => {
        if (Number.isNaN(parseFloat(temperature))) {
            temperature ='';
        }
       this.setState({
           scale: 'F',
           temperature
       })
    }
    handleOnCelciusChange = (temperature) => {
        if (Number.isNaN(parseFloat(temperature))) {
            temperature ='';
        }
        this.setState({
            scale: 'C',
            temperature
        })
     }
    toCelcius = (temperature) => {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)) {
            return '';
        }
        const celcius = ((input - 32) * 5/9);
        console.log(celcius)
        return (Math.round(celcius * 1000)/1000).toString();
    }
    tofarenheit = (temperature) => {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)) {
            return '';
        }
        const farenheit = ((input * 9/5) + 32);
        return (Math.round(farenheit * 1000)/1000).toString();
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcius = scale === 'F' ? this.toCelcius(temperature): temperature;
        const farenheit = scale === 'C' ? this.tofarenheit(temperature) : temperature;
        return (
            <div>
                <TemperatureInput
                scale="F"
                temperature={farenheit}
                onTemperatureChange = {this.handleOnFarenheitChange}/>
                
                <TemperatureInput
                scale="C"
                temperature={celcius}
                onTemperatureChange = {this.handleOnCelciusChange}/>
               
            </div>
        )
    }
}
export default Calculator;