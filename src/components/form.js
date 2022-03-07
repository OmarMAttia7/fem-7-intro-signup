import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);

      this.inputs = [

        {
          name: 'firstname',
          type: 'text',
          label: 'First Name'
        },

        {
          name: 'lastname',
          type: 'text',
          label: 'Last Name'
        },

        {
          name: 'usermail',
          type: 'email',
          label: 'E-mail'
        },

        {
          name: 'pwd',
          type: 'password',
          label: 'Password'
        }

      ]
    }
    render() {
        return (
            <form>
              {
                this.inputs.map(input => {
                  return (
                      <p>

                        <label for={input.name}>

                          <span className="sr-only">{input.label}: </span>

                          <input type={input.type} name={input.name} placeholder={input.label}
                          className="w-full border-[1px] border-[rgba(0,0,0,0.2)] rounded-[5px] p-3 mb-4
                          " />

                        </label>
                      </p>
                  );
                })
              }

                <p>
                  <button type="submit"
                  className="bg-green w-full p-4 text-white font-[600] rounded-[5px] uppercase
                  shadow-[0_3px_0_hsl(154,59%,40%)] mb-4">Claim your free trial</button>
                </p>
            </form>
        )
    }
}

export default Form;