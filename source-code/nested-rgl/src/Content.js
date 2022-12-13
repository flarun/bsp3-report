import GridLayout from "react-grid-layout";
import jsxToString from 'jsx-to-string';

// Inner content component
const Content = () => {

  const injectedComponent = () => {
    return (
      <GridLayout className="layout" cols={20} rowHeight={50} width={1800}><div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 2, }}><h3>Grid Item C</h3><p id="c"></p> </div><div key="b" data-grid={{ x: 2, y: 0, w: 2, h: 2, }}><h3>Grid Item D</h3><p id="d"></p> </div></GridLayout>
    )
  }
  const handleClickSendA = (e) => {
    let sectionA = document.querySelector("#a");
    sectionA.innerHTML = jsxToString(injectedComponent());
    let sectionB = document.querySelector("#b");
    // injecting html
    sectionB.innerHTML = '';
    console.log("handleClick called");
  }

  const handleClickSendB = (e) => {
    let sectionA = document.querySelector("#a");
    sectionA.innerHTML = '';
    let sectionB = document.querySelector("#b");
    // injecting the data 
    sectionB.innerHTML = jsxToString(injectedComponent());
    console.log("handleClick called");
  }

  // buttons
  // attempt at nested elements
  return ( 
    <div className="content">
      <GridLayout className="layout" cols={20} rowHeight={50} width={1800}>
      <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 4, }}>

      <button onClick={handleClickSendA}>Sent here</button>
        <h3>Grid Item A</h3>
        <p id="a"></p> 
      
      </div>
      <div key="b" data-grid={{ x: 4, y: 0, w: 4, h: 4, }}>
      <button onClick={handleClickSendB}>Send here</button>
        <h3>Grid Item B</h3>
        <p id="b"></p> 
      </div>
      </GridLayout>
      
    </div>
  );
}
 
export default Content;