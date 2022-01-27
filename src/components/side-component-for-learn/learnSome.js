import { Component } from "react";

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            inputText: '',
            text: "lalala"
        }
        this.nextYear2 = this.nextYear2.bind(this);
    } 
    // конструктор если нам нужны только props не обязательно вызывать

    // nextYear = () => {
    //     this.setState({
    //         years: this.state.years + 1
    //     })
    // } в таком варианте может быть конфликт с тем что кнопку уже нажимают,
    // а старый стейт еще не готов, поэтому применяется конструкция, которая идет ниже
    // нужна такая конструкция, когда работа коллбека четко зависит от прошлого состояния
    // п.с. тк возвращаем объект {} то заключаем его в скобки, чтобы не писать return

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
        // эта конструкция не будет перезаписывать state.text, 
        // это автоматом проверяется React и переписывается только то, что нужно
    }
    nextYear2 () {
        this.setState(state => ({
            years: state.years + 1
        }))
    }
    commitInputChanges = (e, color) => {
        this.setState({
            inputText: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My Name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} value={this.state.inputText}/>
                    {/* onInput and onChange the same, but onChange often used */}
                </form>
            </div>
        )
    }
}

const App = () => {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="/some.com"/>
            <WhoAmI name="John2" surname="Smith2" link="/some2.com"/>
        </div>
    )
}



// ---------------------------------------------------------------------------------------



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: this.props.counter
      }
    }
    
    inc = () => {
      this.setState(state => ({
        counter: state.counter + 1
      }))
    }
    
    dec = () => {
      this.setState(state => ({
        counter: state.counter - 1
      }))
    }
    
    randomiser = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    
    rnd = () => {
      this.setState({
        counter: this.randomiser(-50, 50)
      })
    }
    
    reset = () => {
      this.setState({
        counter: this.props.counter
      })
    }
    
    // Этот пример возвращает случайное целое число в заданном интервале. 
    // Возвращаемое значение не менее min 
    // (или следующее целое число, которое больше min, если min не целое) 
    // и не более (но не равно) max
    //   function getRandomInt(min, max) {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    //   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум включается, минимум включается
    // }
    
    render() {
      return (
        <div class="app">
          <div class="counter">{this.state.counter}</div>
          <div class="controls">
            <button onClick={this.inc}>INC</button>
            <button onClick={this.dec}>DEC</button>
            <button onClick={this.rnd}>RND</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App counter={0}/>, document.getElementById('app'));