import React from "react";
import validate from "../libraries/validate.js";

class FormInput extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      value: '',
      err: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {

    this.setState({value: e.target.value}, () => {

      let validation = validate(this.state.value, this.props.validationObject);

      if(!validation.state && validation.requirement !== 'pattern'){
        this.setState({err: `${this.props.inputLabel} cannot be empty`});
      }else if(!validation.state && validation.requirement === 'pattern'){
        this.setState({err: `Looks like this is not an email`});
      }else{
        this.setState({err: ''});
      }

    });

  }

  render() {
    let props = this.props;

    let hasContent = this.state.value ? 'opacity-100 left-0 -top-2' : 'opacity-80 top-7 left-3';
    let isValid = this.state.err ? 'border-red text red focus:outline-red' : '';

    return <label htmlFor={props.inputName} className="block relative">

      <span className={`absolute font-[600] cursor-text transition-all ${hasContent}`}>
        {props.inputLabel}
      </span>

      <input type={props.inputType} name={props.inputName} id={props.inputName}
            className={`w-full border-[1px] border-[rgba(0,0,0,0.2)] rounded-[5px] mb-6 mt-4 p-3
                                    focus:outline-2 focus:outline-darkblue focus:outline peer ${isValid}`}
      value={this.state.value} onChange={this.handleChange}/>

      <span className="" aria-live="polite">
        {this.state.err}
      </span>
    </label>
  }

}

export default FormInput;