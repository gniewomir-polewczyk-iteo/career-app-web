import { FlowNodeWithPosition, PostType, Roadmap } from "../../../types";
import { useEffect, useState } from "react";

const HORIZONTAL_SPACING = 500;
const VERTICAL_SPACING = 200;

export const useFlowData = (roadmaps: PostType[]) => {
  const [nodes, setNodes] = useState<FlowNodeWithPosition[]>([]);
  const [edges, setEdges] = useState<
    { id: string; source: string; target: string }[]
  >([]);

  useEffect(() => {
    const positionMap: Record<string, { x: number; y: number }> = {};

    const roots = roadmaps.filter((node) => node.parentIds.length === 0);
    roots.forEach((node, idx) => {
      positionMap[node.id] = {
        x: idx * HORIZONTAL_SPACING,
        y: 0,
      };
    });

    const calculateChildPositions = (parentId: string, depth: number) => {
      const children = roadmaps.filter((node) =>
        node.parentIds.includes(parentId)
      );

      children.forEach((child, idx) => {
        if (child.parentIds.every((pid) => positionMap[pid])) {
          const avgParentX =
            child.parentIds.reduce((sum, pid) => sum + positionMap[pid].x, 0) /
            child.parentIds.length;
          const maxYOfParents = Math.max(
            ...child.parentIds.map((pid) => positionMap[pid].y)
          );

          positionMap[child.id] = {
            x:
              avgParentX +
              (idx - (children.length - 1) / 2) * HORIZONTAL_SPACING,
            y: maxYOfParents + VERTICAL_SPACING,
          };

          calculateChildPositions(child.id, depth + 1);
        }
      });
    };

    roots.forEach((root) => calculateChildPositions(root.id, 1));

    const generatedNodes: FlowNodeWithPosition[] = roadmaps.map((r) => ({
      id: r.id,
      type: "custom",
      data: {
        title: r.title,
        excerpt: r.excerpt,
        slug: r.slug,
      },
      position: positionMap[r.id],
    }));

    const generatedEdges: { id: string; source: string; target: string }[] =
      roadmaps.flatMap((node) =>
        node.parentIds.map((parentId) => ({
          id: `${node.id}-${parentId}`,
          source: parentId,
          target: node.id,
        }))
      );

    setNodes(generatedNodes);
    setEdges(generatedEdges);
  }, [roadmaps]);

  return { nodes, edges };
};
