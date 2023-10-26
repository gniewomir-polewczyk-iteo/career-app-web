import ReactFlow, { BezierEdge, Controls } from "reactflow";
import { CustomNode } from "./components/custom-node";
import { Roadmap } from "../../types";
import { useFlowData } from "./hooks/use-positioned-roadmap";
import { useNodeContext } from "./providers/node-context-provider";
import PostType from "../../interfaces/post";

import "reactflow/dist/base.css";

const nodeTypes = {
  custom: CustomNode,
};

type Props = {
  posts: PostType[];
};

export const FlowRoadmap = ({ posts }: Props) => {
  const initialRoadmap: Roadmap[] = [
    {
      id: "1",
      name: "BRAK DANYCH",
      description: "SKONTAKTUJ SIE Z ADMINSITRATOREM APLIKACJI",
      emoji: "🚀",
      links: [],
      longDescription: "",
      parentIds: [],
    },
  ];

  const params = {
    mapName: "developer",
  };

  const findRoadMap = {
    roadMapName: "developer",
    roadMap: posts,
  };

  const positionedRoadmap = useFlowData(findRoadMap?.roadMap || initialRoadmap);
  const { nodeItem } = useNodeContext();

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
      {/* <Modal
        isOpen={nodeItem.value.name !== ""}
        onClose={() =>
          nodeItem.set({
            description: "",
            name: "",
            links: [],
            emoji: "",
          })
        }
        content={<ModalContent />}
      /> */}
    </>
  );
};
