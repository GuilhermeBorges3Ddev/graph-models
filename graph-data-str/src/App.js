import { Graph } from "react-d3-graph";

import logo from './logo-btg.png';
import './App.css';

function App() {

  // graph payload (with minimalist structure)
  const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [
      { source: "Harry", target: "Sally" },
      { source: "Harry", target: "Alice" },
    ],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height={150} width={150} alt="logo" />
        <span>
          Graph visualization of react-d3-graph:
        </span>
        <a
          href="https://danielcaldas.github.io/react-d3-graph/docs/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://danielcaldas.github.io/react-d3-graph/docs/index.html
        </a>
        <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />;
      </header>
    </div>
  );
}

export default App;
