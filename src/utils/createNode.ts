import { INode } from "../model/INode";
import { NodeCounter } from "../services/NodeCounter";

export const createNode = (
  caption: string,
  amountChildren: number,
  depth: number,
  level?: number
): INode => {
  const nodes: INode[] = [];
  const nextLevel = (level ?? 0) + 1;
  NodeCounter.count++;
  const prefixCaption = `${caption === "Root" ? "" : `${caption}.`}`;

  // generate child nodes
  if (nextLevel <= depth) {
    for (let i = 0; i < amountChildren; i++) {
      const childCaption = `${prefixCaption}${i + 1}`;
      const child = createNode(childCaption, amountChildren, depth, nextLevel);
      nodes.push(child);
    }
  }
  return {
    caption,
    nodes,
  };
};
