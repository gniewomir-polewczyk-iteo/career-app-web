import ReactFlow, { BezierEdge, Controls } from "reactflow";
import "reactflow/dist/base.css";
import { responseData } from "../../../data";
import { Roadmap } from "../../../types";
import { Modal } from "../../../components/modal";
import { CustomNode } from "./components/custom-node";
import { ModalContent } from "./components/modal-content";
import { useFlowData } from "./hooks/usePositionedRoadmap";
import { useNodeContext } from "./providers/node-context-provider";
import { getAllPosts } from "../../../lib/api";
import PostType from "../../../interfaces/post";

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

  // const findRoadMap = responseData.find(
  //   (roadmap) => roadmap.roadMapName === params.mapName
  // );

  const findRoadMap = {
    roadMapName: "developer",
    roadMap: posts,
  };

  const positionedRoadmap = useFlowData(findRoadMap?.roadMap || initialRoadmap);
  const { nodeItem } = useNodeContext();

  console.log(positionedRoadmap);

  // console.log(positionedRoadmap);
  // console.log(posts);

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
