import { INode } from "../../model/INode";
import { IHaveSelectNode } from "../../types/IHaveSelectNode";

export interface ITreeProps extends IHaveSelectNode {
  rootNode: INode;
}
