import React from "react";
import Form from "./form.js";


class FormSection extends React.Component {
    constructor(props) {
      super(props);
      this.styling = {
        box: "rounded-lg py-5 shadow-[0_0.5rem_0_rgba(0,0,0,0.2)]"
      }
    }
    render() {
        return (
            <div>

                <div
                    className={`bg-blue ${this.styling.box} px-16 text-center mb-5`}>

                  <strong className="font-bold">Try it free 7 days</strong> then $20/mo. thereafter

                </div>

              <div
                  className={`bg-white ${this.styling.box} px-5 text-center text-darkblue`}>

                <Form />

                <p className="text-grayblue text-[0.75rem] leading-6">
                  By clicking the button, you are agreeing to our <a href="#"
                className="text-red font-bold">Terms and Services</a>
                </p>

              </div>
            </div>
        )
    }

}

export default FormSection;