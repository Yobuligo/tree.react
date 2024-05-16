import { Tree } from "./components/tree/Tree";
import { NodeCounter } from "./services/NodeCounter";
import { createNode } from "./utils/createNode";

const rootNode = createNode("Root", 10, 3);

export const App: React.FC = () => {
  return (
    <>
      {`Node Counter ${NodeCounter.count}`}
      <Tree
        rootNode={rootNode}
        onCollapseNode={(node) => {
          console.log(`Node with id ${node.caption} was collapsed`);
        }}
        onExpandNode={(node) => {
          console.log(`Node with id ${node.caption} was expanded`);
        }}
        onSelectNode={(node) => {
          console.log(`Node with id ${node.caption} was clicked`);
        }}
      />
    </>
  );
};
