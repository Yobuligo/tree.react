import { CSSProperties, useState } from "react";
import { ReactComponent as CollapseIcon } from "../../assets/collapse.svg";
import { ReactComponent as ExpandIcon } from "../../assets/expand.svg";
import { INodeProps } from "./INodeProps";
import styles from "./Node.module.scss";

export const Node: React.FC<INodeProps> = (props) => {
  const [expanded, setExpanded] = useState(false);

  const nextLevel = props.level + 1;

  const items = props.node.nodes?.map((node) => (
    <Node
      key={node.caption}
      level={nextLevel}
      node={node}
      onCollapseNode={(node) => props.onCollapseNode?.(node)}
      onExpandNode={(node) => props.onExpandNode?.(node)}
      onSelectNode={(node) => props.onSelectNode?.(node)}
    />
  ));

  const style = {
    marginLeft: `${props.level * 1}rem`,
  } as CSSProperties;

  const onCollapse = () => {
    setExpanded(false);
    props.onCollapseNode?.(props.node);
  };
  const onExpand = () => {
    setExpanded(true);
    props.onExpandNode?.(props.node);
  };

  const onSelectNode = () => props.onSelectNode?.(props.node);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.node} style={style}>
          <div className={styles.icon}>
            {props.node.nodes && props.node.nodes.length > 0 && (
              <>
                {expanded ? (
                  <ExpandIcon
                    onClick={onCollapse}
                    width={"1.5rem"}
                    height={"1.5rem"}
                  />
                ) : (
                  <CollapseIcon
                    onClick={onExpand}
                    width={"1.5rem"}
                    height={"1.5rem"}
                  />
                )}
              </>
            )}
          </div>
          <div className={styles.caption} onClick={onSelectNode}>
            {props.node.caption}
          </div>
        </div>
      </div>
      {expanded && <div>{items}</div>}
    </>
  );
};
