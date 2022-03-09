import React from "react";
import FormInput from "./form-input";

class Form extends React.Component {
    constructor(props) {
      super(props);

      this.inputs = [

        {
          name: 'firstname',
          type: 'text',
          label: 'First Name',

          validation: {
            type: 'string',
            length: {greaterThan: 0}
          }

        },

        {
          name: 'lastname',
          type: 'text',
          label: 'Last Name',

          validation: {
            type: 'string',
            length: {greaterThan: 0}
          }

        },

        {
          name: 'usermail',
          type: 'email',
          label: 'Email Address',

          validation: {
            type: 'string',
            length: {greaterThan: 0},
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          }

        },

        {
          name: 'pwd',
          type: 'password',
          label: 'Password',

          validation: {
            type: 'string',
            length: {greaterThan: 0}
          }

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

                          <FormInput inputType={input.type} inputName={input.name} inputLabel={input.label} validationObject={input.validation} />

                      </p>
                  );
                })
              }

                <p>

                  <button type="submit"
                  className="bg-green w-full p-4 text-white font-[600] rounded-[5px] uppercase
                  shadow-[0_3px_0_hsl(154,59%,40%)] mb-4 hover:bg-[hsl(154,59%,70%)] hover:text-[hsl(154,59%,20%)]">
                    Claim your free trial
                  </button>

                </p>
            </form>
        )
    }
}

export default Form;