const Parent = React.createElement(
  "div",
  {},
  (child = React.createElement(
    "div",
    {},
    (heading = React.createElement("h1", {}, "hello from h1"))
  ))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);