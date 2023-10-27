import { CustomNode } from "./components/custom-node";
import { PostType } from "../../types";
import { useFlowData } from "./hooks/use-positioned-roadmap";
import ReactFlow, { BezierEdge, Controls } from "reactflow";

import "reactflow/dist/base.css";

const nodeTypes = {
  custom: CustomNode,
};

type Props = {
  posts: PostType[];
};

export const FlowRoadmap = ({ posts }: Props) => {
  const positionedRoadmap = useFlowData(posts);

  return (
    <>
      <ReactFlow
        style={{
          width: "100%",
          height: "100%",
        }}
        edgeTypes={{
          default: BezierEdge,
        }}
        nodes={[...positionedRoadmap.nodes]}
        edges={[...positionedRoadmap.edges]}
        nodeTypes={nodeTypes}
        fitView
        className="bg-teal-50"
      >
        <Controls />
      </ReactFlow>
    </>
  );
};
