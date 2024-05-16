import { Node } from "../node/Node";
import { ITreeProps } from "./ITreeProps";

export const Tree: React.FC<ITreeProps> = (props) => {
  return (
    <Node
      node={props.rootNode}
      level={0}
      onSelectNode={(node) => props.onSelectNode?.(node)}
    />
  );
};
