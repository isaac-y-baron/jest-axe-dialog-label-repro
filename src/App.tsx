import * as React from "react";

function App() {
  const textFieldLabel = React.useRef("my-text-field").current;

  return <>
    <label htmlFor={textFieldLabel}>My label</label>
    <input id={textFieldLabel} />
    <div aria-labelledby={textFieldLabel} role="dialog">Foo</div>
  </>
}

export default App
