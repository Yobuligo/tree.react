import { INode } from "../../model/INode";
import { IHaveNodeEvents } from "../../types/IHaveNodeEvents";

export interface INodeProps extends IHaveNodeEvents {
  collapsed?: boolean;
  level: number;
  node: INode;
}
