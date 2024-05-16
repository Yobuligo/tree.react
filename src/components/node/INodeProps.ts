import { INode } from "../../model/INode";
import { IHaveSelectNode } from "../../types/IHaveSelectNode";

export interface INodeProps extends IHaveSelectNode {
  collapsed?: boolean;
  level: number;
  node: INode;
}
