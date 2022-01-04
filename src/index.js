var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { pastWork } from "../src/data.js";

var AboutMe = function (_React$Component) {
  _inherits(AboutMe, _React$Component);

  function AboutMe(props) {
    _classCallCheck(this, AboutMe);

    return _possibleConstructorReturn(this, (AboutMe.__proto__ || Object.getPrototypeOf(AboutMe)).call(this, props));
  }

  _createClass(AboutMe, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { id: "about" },
        React.createElement(
          "div",
          { className: "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" },
          React.createElement(
            "div",
            { className: "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" },
            React.createElement(
              "h1",
              { className: "sm:text-4xl text-3xl mb-4 font-medium text-thcol-night" },
              "Hi, I'm James!",
              React.createElement("br", { className: "hidden lg:inline-block" }),
              React.createElement(
                "span",
                { className: "sm:text-2xl text-xl" },
                " A chem bio-turned-computer science student at UC Berkeley "
              )
            ),
            React.createElement(
              "p",
              { className: "mb-8 leading-relaxed text-thcol-night" },
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ),
            React.createElement(
              "div",
              { className: "flex justify-center" },
              React.createElement(
                "a",
                { href: "#contact", className: "inline-flex text-white hover:text-thcol-night hover:bg-thcol-lisea border-0 py-2 px-6 focus:outline-none bg-thcol-dasea rounded text-lg" },
                "Contact Me"
              ),
              React.createElement(
                "a",
                { href: "#past-work", className: "ml-4 inline-flex text-white hover:bg-thcol-dasea hover:text-thcol-night border-0 py-2 px-6 focus:outline-none bg-thcol-water rounded text-lg" },
                "See My Past Work"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6" },
            React.createElement("img", { className: "object-cover object-center rounded", src: "../src/icon.png", alt: "placeholder" })
          )
        )
      );
    }
  }]);

  return AboutMe;
}(React.Component);

var PastWork = function (_React$Component2) {
  _inherits(PastWork, _React$Component2);

  function PastWork(props) {
    _classCallCheck(this, PastWork);

    return _possibleConstructorReturn(this, (PastWork.__proto__ || Object.getPrototypeOf(PastWork)).call(this, props));
  }

  _createClass(PastWork, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { id: "past-work", className: "bg-thcol-water text-white" },
        React.createElement(
          "div",
          { className: "container px-5 py-10 mx-auto text-center lg:px-20" },
          React.createElement(
            "div",
            { className: "flex flex-col w-full mb-20" },
            React.createElement(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", className: "mx-auto inline-block w-10 mb-4", viewBox: "0 0 20 20", fill: "currentColor" },
              React.createElement("path", { d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" })
            ),
            React.createElement(
              "h1",
              { className: "sm:text-4xl text-3xl font-medium title-font mb-4" },
              "My Past Work"
            ),
            React.createElement(
              "p",
              { className: "lg:w-2/3 mx-auto leading-relaxed text-base" },
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            )
          ),
          React.createElement(
            "div",
            { className: "flex flex-wrap -m-4" },
            pastWork.map(function (project) {
              return React.createElement(
                "a",
                { href: project.link, key: project.image, className: "sm:w-1/2 w-100 lg:w-5/8 p-4" },
                React.createElement(
                  "div",
                  { className: "flex relative" },
                  React.createElement("img", { alt: "project photo", className: "absolute inset-0 w-full h-full object-cover object-center", src: project.image }),
                  React.createElement(
                    "div",
                    { className: "px-8 py-10 relative z-10 w-full border-4 border-thcol-lisea bg-thcol-dasea opacity-0 hover:opacity-100" },
                    React.createElement(
                      "h2",
                      { className: "tracking-widest text-sm font-medium text-thcol-ligreen mb-1" },
                      project.subtitle
                    ),
                    React.createElement(
                      "h1",
                      { className: "text-lg font-medium text-white mb-3" },
                      project.title
                    ),
                    React.createElement(
                      "p",
                      { className: "leading-relaxed" },
                      project.description
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return PastWork;
}(React.Component);

ReactDOM.render(React.createElement(
  "main",
  { className: "bg-thcol-ligreen" },
  React.createElement(AboutMe, null),
  React.createElement(PastWork, null)
), document.getElementById("root"));