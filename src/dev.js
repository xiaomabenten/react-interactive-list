import './dev.scss';
import ReactInteractiveList from './main';

/*===example start===*/

// install: npm install afeiship/react-interactive-list --save
// import : import ReactInteractiveList from 'react-interactive-list'

class App extends React.Component{
  state = {
    defaultValue: 'text-empty',
    value:[
      'text1',
      'text2',
      'text3',
      'text4'
    ]
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _tempate = (item,index) => {
    return (
      <div className="item" key={index}> {item} </div>
    );
  };

  _templateRemove = (index) =>{
    return <button className="react-interactive-remove" onClick={this._onRemove.bind( this, index )} data-role='action-remove'>X</button>
  };

  _templateAdd = () => {
    return <button className="react-interactive-add" onClick={this._onAdd} data-role='action-add'> +Add </button>;
  };

  _onChange = e =>{
    const { value } = e.target;
    this.setState({ value });
  };

  render(){
    const { value, defaultValue } = this.state;
    return (
      <div className="hello-react-interactive-list">
        <ReactInteractiveList
          defaultValue={defaultValue}
          template={this._tempate}
          max={5}
          onChange={this._onChange} value={ value } ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
