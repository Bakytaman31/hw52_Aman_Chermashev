import React, { Component } from 'react';
import Circles from "./Components/Circles/Circles";


class App extends Component {
    state = {
      numbers: []
    };

    generateNumbers = () => {
        let array = [];
        for (let i = 0; i < 5;){
            const number = Math.round(Math.random() * (36 -5 )+5);
            if (array.includes(number)) continue;
            array.push(number);
            i++;
        }

        this.setState({
            numbers: array.sort((a,b)=> a-b)
        });
    };

  render() {
      return (
        <div style={{display: "flex"}}>
            {this.state.numbers.map((num,index)=>{
                return <Circles number={num} key={index}/>
            })}
            <button onClick={this.generateNumbers}>generate numbers</button>
        </div>
    );
  }
}

export default App;
