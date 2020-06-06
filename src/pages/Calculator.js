import React from 'react'
import Screen from '../components/screen'
import Button from '../components/Button'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cNumber: '0',
      operatorFlag: false,
      decimalFlag: false
    }

  }

  handleClick = (buttonName) => {
    let cNumber = this.state.cNumber
    let operatorFlag = this.state.operatorFlag
    switch (true) {
      case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
        if (this.state.cNumber !== "0" && this.state.cNumber !== 0) {
          cNumber += buttonName
          operatorFlag = false
        } else {
          cNumber = buttonName
        }
        break
      case buttonName === '+' ||
        buttonName === '-' ||
        buttonName === '*' ||
        buttonName === '/':
        if (!operatorFlag) {
          cNumber += buttonName
          operatorFlag = true
          this.setState({ decimalFlag: false })

        } else {
          const nwNumber = cNumber.slice(0, cNumber.length - 1)
          cNumber = nwNumber
          cNumber += buttonName
        }
        break
      case buttonName === "C":
        cNumber = "0"
        operatorFlag = false
        this.setState({ decimalFlag: false })

        break
      case buttonName === "=":
        if (!operatorFlag) {
          cNumber = eval(cNumber)
          operatorFlag = false
          this.setState({ decimalFlag: true })
        }
        break
      case buttonName === ".":
        if (!this.state.decimalFlag) {
          cNumber += '.'
          this.setState({ decimalFlag: true })
        }
        break
      default:
        break;
    }
    this.setState({ operatorFlag })
    this.setState({ cNumber })

  }




  render() {
    return (
      <div>
        <div id="calcGrid">
          <Screen id="display" cNumber={this.state.cNumber}></Screen>
          <Button class="btn btn-dark border-light" id="zero" name="0" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="one" name="1" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="two" name="2" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="three" name="3" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="four" name="4" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="five" name="5" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="six" name="6" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="seven" name="7" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="eight" name="8" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="nine" name="9" handleClick={this.handleClick}></Button>
          <Button class="btn btn-danger border-light" id="clear" name="C" handleClick={this.handleClick}></Button>
          <Button class="btn btn-success border-light" id="equals" name="=" handleClick={this.handleClick}></Button>
          <Button class="btn btn-dark border-light" id="decimal" name="." handleClick={this.handleClick}></Button>
          <Button class="btn btn-primary border-light" id="add" name="+" handleClick={this.handleClick}></Button>
          <Button class="btn btn-primary border-light" id="subtract" name="-" handleClick={this.handleClick}></Button>
          <Button class="btn btn-primary border-light" id="multiply" name="*" handleClick={this.handleClick}></Button>
          <Button class="btn btn-primary border-light" id="divide" name="/" handleClick={this.handleClick}></Button>
        </div>
      </div>
    )
  }
}
