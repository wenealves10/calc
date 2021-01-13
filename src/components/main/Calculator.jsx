/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import './Calculator.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

const initialState ={
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

class Calculator extends Component{

    state = {...initialState}
    constructor(props){
        super(props)
        this.ClearMemory = this.ClearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.setAddDigit = this.setAddDigit.bind(this)
    }
    setAddDigit(n){
        
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }       
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = (currentValue + n) === '.' ? '0.' : currentValue + n;
        this.setState({displayValue, clearDisplay: false});
              
        if(n !== '.'){
            let i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({values});
            console.log(values);
        }
    }
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true});
        }else{
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values]
            if(currentOperation === '+') values[0] = values[0] + values[1];
            if(currentOperation === '-') values[0] = values[0] - values[1];
            if(currentOperation === '*') values[0] = values[0] * values[1];
            if(currentOperation === '/') values[0] = values[0] / values[1];
            values[1] = 0;
            this.setState({
                displayValue: values[0].toString(),
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })

        }
    }
    ClearMemory(n){
        this.setState({...initialState});
    }
    render(){
        return (
           <div className='calculator'>
               <Display value={this.state.displayValue}/>
               <Button label='AC' triple click={this.ClearMemory} />
               <Button label='/' operation  click={this.setOperation}/>
               <Button label='7'click={this.setAddDigit}/>
               <Button label='8' click={this.setAddDigit}/>
               <Button label='9' click={this.setAddDigit}/>
               <Button label='*' operation click={this.setOperation}/>
               <Button label='4' click={this.setAddDigit}/>
               <Button label='5' click={this.setAddDigit}/>
               <Button label='6' click={this.setAddDigit}/>
               <Button label='-' operation click={this.setOperation}/>
               <Button label='1' click={this.setAddDigit}/>
               <Button label='2' click={this.setAddDigit}/>
               <Button label='3' click={this.setAddDigit}/>
               <Button label='+' operation click={this.setOperation}/>
               <Button label='0' double click={this.setAddDigit}/>
               <Button label='.' click={this.setAddDigit}/>
               <Button label='=' operation click={this.setOperation}/>
           </div>
        )
    }
}

export default Calculator;
