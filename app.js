import React from 'react';
import ReactDOM from 'react-dom/client';

const heading= React.createElement("h1",{id:"heading"},"Namste React❄️");

// JSX code is transplied before it reaches js engine by parcel -Babel

//JSX =>Babel Transpiled it to React.createElement =>ReactElement-JS Object => HTMLElement(render)

const JsxHeading=()=><h1 id='heading'>Namste React From JSX</h1>
const number=true;
const HeadingComponent = ()=>{
  return(
    <div>
    <JsxHeading/>
    <h2>{number?"HY true" : "hey false"}</h2>
    <h1>namste From functional component</h1>
    </div>  )
 
}


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)


