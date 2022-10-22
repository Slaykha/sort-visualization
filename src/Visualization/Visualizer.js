import React from 'react'
import Column from './Column';

export default class Visualizer extends React.Component {
 constructor(props){
    super(props);

    this.state = {
        array: [],
    };
 }

 componentDidMount(){
    this.generateNumber()
 }

 generateNumber() {
    const count = 25
    var array = []
    for(let i = 0; i < count; i++){
        array.push({height:(Math.floor(Math.random() * 500)), backgroundColor:"blue"})
    }
    this.setState({array});
 }

 sortColumn() {
    var array = this.state.array
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            array[j].backgroundColor = "red"
            if(array[j + 1].height < array[j].height){
                [array[j + 1],array[j]] = [array[j],array[j + 1]] 
                this.setState({array})
            };            
        };
    };
}
    

 render(){
    const {array} = this.state;

    return(
        <div>
            <button onClick={() => this.generateNumber()}>Generate</button>
            <button onClick={() => this.sortColumn()}>Sort</button>
            <div style={{display:"flex", justifyContent:"center"}}>
                {array && array.map((column, index) => (
                <Column 
                    backgroundColor={column.backgroundColor}
                    height={column.height}
                    columns={array}
                /> 
                ))}
            </div>
        </div>
    )
 }
}
