// import './index.css';
import React from 'react';
// import {createUseStyles} from 'react-jss'
import CalculatorTitle from './components/calculatorTitle';
import OutputScreen from './components/outputScreen';
import Button from './components/button';

class App extends React.Component {
  constructor() {
    super();
    // set our default state
    this.state = {
      question: '',
      answer: ''
    }
  
    // Bind our handleClick method (sets 'this' explicitly
    // to refer to this componenent) We did this because 'this'
    // would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }
  
      render()
      {
        // const isBackgroundRed = true;
        // const styles = createUseStyles({
        //   btn : {
        //     color : 'red'
        //   }
        // })
        // const classes = styles()
      return (
      <div className="frame">
        {/* <style>{`
         .widths {width: 200px}
        `}</style> */}
      <CalculatorTitle value=" Calculator"/>
      <div class="mainCalc">
      <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
      <div className="button-row">
        <Button label={'Clear'} handleClick = {this.handleClick}/>
        <Button label={'Del'} handleClick = {this.handleClick}/>
        <Button label={'.'}  handleClick = {this.handleClick}/>
        <Button label={'/'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'7'} handleClick = {this.handleClick}/>
        <Button label={'8'} handleClick = {this.handleClick}/>
        <Button label={'9'} handleClick = {this.handleClick}/>
        <Button label={'*'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'4'} handleClick = {this.handleClick}/>
        <Button label={'5'} handleClick = {this.handleClick}/>
        <Button label={'6'} handleClick = {this.handleClick}/>
        <Button label={'-'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'1'} handleClick = {this.handleClick}/>
        <Button label={'2'} handleClick = {this.handleClick}/>
        <Button label={'3'} handleClick = {this.handleClick}/>
        <Button label={'+'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'√'} handleClick = {this.handleClick}/>
        <Button label={'%'} handleClick = {this.handleClick}/>
        <Button label={'0'} handleClick = {this.handleClick} />
        <Button label={'='} handleClick = {this.handleClick}/>
      </div>
      </div>
      </div>
      );
    }
  
    // our method to handle all click events from our buttons
    handleClick(event){
  
      // get the value from the target element (button)
      const value = event.target.value;
  
      switch (value) {
        case '=': {
          // if it's an equal sign, use the eval module
          // to evaluate the question ,convert the answer
          // (in number) to String
          if(this.state.question!=='')
          {
            var ans='';
            try
            {
              // eslint-disable-next-line no-eval
              ans = eval(this.state.question);
            }
            catch(err)
            {
              this.setState({answer: "Math Error"});
            }
            if(ans===undefined)
              this.setState({answer: "Math Error"});
            // update answer in our state.
            else
              this.setState({ answer: ans , question: ''});
            // break;
          }
          break;
        }
        case 'Clear': {
          // if it's the Clears sign, just clean our
          // question and answer in the state
          this.setState({ question: '', answer: '' });
          break;
        }
      
        case '%':{
          // var p_ans= this.state.answer;
           var percentToGet = this.state.question;
           var percent = (percentToGet / 100) ;
           this.setState({question: percent});
           break;
        }
        case '√':{
          // var p_ans= this.state.answer;
           var squareRootNumber = this.state.question;
           var squareRoot = Math.sqrt(squareRootNumber) ;
           this.setState({question: squareRoot});
           break;
        }
      case 'Del': {
        var str = this.state.question;
        str = str.substr(0,str.length-1);
        this.setState({question: str});
        break;
      }
  
      default: {
          // for every other commmand, update the answer in the state
          this.setState({ question: this.state.question += value})
          break;
        }
      }
    }
  
  }
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
