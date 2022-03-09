"use strict";
(self["webpackChunk_7_intro_signup_form"] = self["webpackChunk_7_intro_signup_form"] || []).push([[826],{

/***/ 813:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./src/components/intro-section.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IntroSection = /*#__PURE__*/function (_React$Component) {
  _inherits(IntroSection, _React$Component);

  var _super = _createSuper(IntroSection);

  function IntroSection() {
    _classCallCheck(this, IntroSection);

    return _super.apply(this, arguments);
  }

  _createClass(IntroSection, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "text-center py-10 mt-10 md:flex md:justify-center md:flex-col md:text-left"
      }, /*#__PURE__*/react.createElement("h1", {
        className: "text-2xl font-bold mb-5 md:text-4xl lg:text-5xl"
      }, "Learn to code by watching others"), /*#__PURE__*/react.createElement("p", {
        className: "md:text-lg"
      }, "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."));
    }
  }]);

  return IntroSection;
}(react.Component);

/* harmony default export */ const intro_section = (IntroSection);
;// CONCATENATED MODULE: ./src/libraries/validate.js
function validate_typeof(obj) { "@babel/helpers - typeof"; return validate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, validate_typeof(obj); }

/**
 * validate(inputValue, validationData) is used for validating data,
 * @param inputValue is the data to be validated
 * @param validationData is an object with the requirements
 * currently supported metrics are:
 * 1. type (required), 2. length, 3. value
 * @returns {object} {state: boolean[, requirement: string]}
 */
function validate(inputValue, validationData) {
  //Check for type
  if (validate_typeof(inputValue) !== validationData['type']) {
    return {
      'state': false,
      'requirement': 'type'
    };
  } //Check for length


  if (validationData['length']) {
    if (validationData['length'].hasOwnProperty('greaterThan') && inputValue.length <= validationData['length']['greaterThan']) {
      return {
        'state': false,
        'requirement': 'length'
      };
    }

    if (validationData['length'].hasOwnProperty('lesserThan') && inputValue.length >= validationData['length']['lesserThan']) {
      return {
        'state': false,
        'requirement': 'length'
      };
    }

    if (validationData['length']['equals'] && inputValue.length !== validationData['length']['equals']) {
      return {
        'state': false,
        'requirement': 'length'
      };
    }
  } //Check for value


  if (validationData['value'] && inputValue !== validationData['value']) {
    return {
      'state': false,
      'requirement': 'value'
    };
  } //Check for pattern


  if (validationData.hasOwnProperty('pattern') && !inputValue.match(validationData['pattern'])) {
    return {
      'state': false,
      'requirement': 'pattern'
    };
  }

  return {
    'state': true
  };
}

/* harmony default export */ const libraries_validate = (validate);
;// CONCATENATED MODULE: ./src/components/form-input.js
function form_input_typeof(obj) { "@babel/helpers - typeof"; return form_input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, form_input_typeof(obj); }

function form_input_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_input_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_input_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_input_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function form_input_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) form_input_setPrototypeOf(subClass, superClass); }

function form_input_setPrototypeOf(o, p) { form_input_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return form_input_setPrototypeOf(o, p); }

function form_input_createSuper(Derived) { var hasNativeReflectConstruct = form_input_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = form_input_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = form_input_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return form_input_possibleConstructorReturn(this, result); }; }

function form_input_possibleConstructorReturn(self, call) { if (call && (form_input_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return form_input_assertThisInitialized(self); }

function form_input_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function form_input_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function form_input_getPrototypeOf(o) { form_input_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return form_input_getPrototypeOf(o); }




var FormInput = /*#__PURE__*/function (_React$Component) {
  form_input_inherits(FormInput, _React$Component);

  var _super = form_input_createSuper(FormInput);

  function FormInput(props) {
    var _this;

    form_input_classCallCheck(this, FormInput);

    _this = _super.call(this, props);
    _this.state = {
      value: '',
      err: ''
    };
    _this.handleChange = _this.handleChange.bind(form_input_assertThisInitialized(_this));
    return _this;
  }

  form_input_createClass(FormInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _this2 = this;

      this.setState({
        value: e.target.value
      }, function () {
        var validation = libraries_validate(_this2.state.value, _this2.props.validationObject);

        if (!validation.state && validation.requirement !== 'pattern') {
          _this2.setState({
            err: "".concat(_this2.props.inputLabel, " cannot be empty")
          });
        } else if (!validation.state && validation.requirement === 'pattern') {
          _this2.setState({
            err: "Looks like this is not an email"
          });
        } else {
          _this2.setState({
            err: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var hasContent = this.state.value ? 'opacity-100 left-0 -top-2' : 'opacity-80 top-7 left-3';
      var isValid = this.state.err ? 'text-red focus:outline-red border-red bg-error' : 'border-[rgba(0,0,0,0.2)] focus:outline-darkblue';
      return /*#__PURE__*/react.createElement("label", {
        htmlFor: props.inputName,
        className: "block relative"
      }, /*#__PURE__*/react.createElement("span", {
        className: "absolute font-[600] cursor-text transition-all ".concat(hasContent)
      }, props.inputLabel), /*#__PURE__*/react.createElement("input", {
        type: props.inputType,
        name: props.inputName,
        id: props.inputName,
        className: "w-full border-[1px] rounded-[5px] mb-6 mt-4 p-3 bg-no-repeat bg-[center_right_1.5rem]\n                                    focus:outline-2 focus:outline ".concat(isValid),
        value: this.state.value,
        onChange: this.handleChange
      }), /*#__PURE__*/react.createElement("span", {
        className: "text-red text-sm absolute bottom-0 right-0 italic",
        "aria-live": "polite"
      }, this.state.err));
    }
  }]);

  return FormInput;
}(react.Component);

/* harmony default export */ const form_input = (FormInput);
;// CONCATENATED MODULE: ./src/components/form.js
function form_typeof(obj) { "@babel/helpers - typeof"; return form_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, form_typeof(obj); }

function form_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function form_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) form_setPrototypeOf(subClass, superClass); }

function form_setPrototypeOf(o, p) { form_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return form_setPrototypeOf(o, p); }

function form_createSuper(Derived) { var hasNativeReflectConstruct = form_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = form_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = form_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return form_possibleConstructorReturn(this, result); }; }

function form_possibleConstructorReturn(self, call) { if (call && (form_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return form_assertThisInitialized(self); }

function form_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function form_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function form_getPrototypeOf(o) { form_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return form_getPrototypeOf(o); }




var Form = /*#__PURE__*/function (_React$Component) {
  form_inherits(Form, _React$Component);

  var _super = form_createSuper(Form);

  function Form(props) {
    var _this;

    form_classCallCheck(this, Form);

    _this = _super.call(this, props);
    _this.inputs = [{
      name: 'firstname',
      type: 'text',
      label: 'First Name',
      validation: {
        type: 'string',
        length: {
          greaterThan: 0
        }
      }
    }, {
      name: 'lastname',
      type: 'text',
      label: 'Last Name',
      validation: {
        type: 'string',
        length: {
          greaterThan: 0
        }
      }
    }, {
      name: 'usermail',
      type: 'email',
      label: 'Email Address',
      validation: {
        type: 'string',
        length: {
          greaterThan: 0
        },
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      }
    }, {
      name: 'pwd',
      type: 'password',
      label: 'Password',
      validation: {
        type: 'string',
        length: {
          greaterThan: 0
        }
      }
    }];
    return _this;
  }

  form_createClass(Form, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("form", null, this.inputs.map(function (input) {
        return /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(form_input, {
          inputType: input.type,
          inputName: input.name,
          inputLabel: input.label,
          validationObject: input.validation
        }));
      }), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("button", {
        type: "submit",
        className: "bg-green w-full p-4 text-white font-[600] rounded-[5px] uppercase shadow-[0_3px_0_hsl(154,59%,40%)] mb-4 hover:bg-[hsl(154,59%,70%)] hover:text-[hsl(154,59%,20%)]"
      }, "Claim your free trial")));
    }
  }]);

  return Form;
}(react.Component);

/* harmony default export */ const components_form = (Form);
;// CONCATENATED MODULE: ./src/components/form-section.js
function form_section_typeof(obj) { "@babel/helpers - typeof"; return form_section_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, form_section_typeof(obj); }

function form_section_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_section_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_section_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_section_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_section_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function form_section_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) form_section_setPrototypeOf(subClass, superClass); }

function form_section_setPrototypeOf(o, p) { form_section_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return form_section_setPrototypeOf(o, p); }

function form_section_createSuper(Derived) { var hasNativeReflectConstruct = form_section_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = form_section_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = form_section_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return form_section_possibleConstructorReturn(this, result); }; }

function form_section_possibleConstructorReturn(self, call) { if (call && (form_section_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return form_section_assertThisInitialized(self); }

function form_section_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function form_section_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function form_section_getPrototypeOf(o) { form_section_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return form_section_getPrototypeOf(o); }




var FormSection = /*#__PURE__*/function (_React$Component) {
  form_section_inherits(FormSection, _React$Component);

  var _super = form_section_createSuper(FormSection);

  function FormSection(props) {
    var _this;

    form_section_classCallCheck(this, FormSection);

    _this = _super.call(this, props);
    _this.styling = {
      box: "rounded-lg py-5 shadow-[0_0.5rem_0_rgba(0,0,0,0.2)]"
    };
    return _this;
  }

  form_section_createClass(FormSection, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "md:flex md:justify-center md:flex-col"
      }, /*#__PURE__*/react.createElement("div", {
        className: "bg-blue ".concat(this.styling.box, " px-16 text-center mb-5")
      }, /*#__PURE__*/react.createElement("strong", {
        className: "font-bold"
      }, "Try it free 7 days"), " then $20/mo. thereafter"), /*#__PURE__*/react.createElement("div", {
        className: "bg-white ".concat(this.styling.box, " px-5 text-center text-darkblue")
      }, /*#__PURE__*/react.createElement(components_form, null), /*#__PURE__*/react.createElement("p", {
        className: "text-grayblue text-[0.75rem] leading-6"
      }, "By clicking the button, you are agreeing to our ", /*#__PURE__*/react.createElement("a", {
        href: "#",
        className: "text-red font-bold"
      }, "Terms and Services"))));
    }
  }]);

  return FormSection;
}(react.Component);

/* harmony default export */ const form_section = (FormSection);
;// CONCATENATED MODULE: ./src/index.js






function App() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("main", {
    className: "font-main text-white py-10 px-[8vw] lg:px-[10vw] md:grid md:grid-cols-2 md:min-h-screen md:gap-5"
  }, /*#__PURE__*/react.createElement(intro_section, null), /*#__PURE__*/react.createElement(form_section, null)), /*#__PURE__*/react.createElement("footer", null, /*#__PURE__*/react.createElement("p", {
    "class": "text-darkblue"
  }, "Challenge by ", /*#__PURE__*/react.createElement("a", {
    href: "https://www.frontendmentor.io?ref=challenge",
    target: "_blank",
    className: "text-red underline"
  }, "Frontend Mentor"), ". Coded by ", /*#__PURE__*/react.createElement("a", {
    href: "https://www.frontendmentor.io/profile/hazel79",
    className: "text-red underline"
  }, "Omar M."), ".")));
}

document.body.classList.add('bg-mobile', 'md:bg-desktop');
react_dom.render( /*#__PURE__*/react.createElement(App, null), document.getElementById("root"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(813)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);