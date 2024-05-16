import { INode } from "../../model/INode";
import { IHaveNodeEvents } from "../../types/IHaveNodeEvents";

export interface ITreeProps extends IHaveNodeEvents {
  rootNode: INode;
}
