import { INode } from "../model/INode";

export interface IHaveSelectNode {
  onSelectNode?: (node: INode) => void;
}
