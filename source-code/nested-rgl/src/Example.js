import GridLayout from "react-grid-layout";

// Example component
const Example = () => {
  return (  
    <div className="example">
      <GridLayout className="layout" cols={20} rowHeight={50} width={1800}>
        <div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 2, }}>
          <h3>Element C</h3>
          <p id="c"></p> 
        </div>
        <div key="b" data-grid={{ x: 2, y: 0, w: 2, h: 2, }}>
          <h3>Element D</h3>
          <p id="d"></p> 
        </div>
      </GridLayout>
    </div>
  );
}
 
export default Example;