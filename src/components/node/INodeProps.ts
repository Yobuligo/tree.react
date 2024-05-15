import { INode } from "../../model/INode";

export interface INodeProps {
  collapsed?: boolean;
  level: number;
  node: INode;
}
