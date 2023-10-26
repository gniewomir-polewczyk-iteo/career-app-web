import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { FlowData } from "../../../types";
import { Handle, Position } from "reactflow";
import { useNodeContext } from "../providers/node-context-provider";
import Link from "next/link";

type Props = {
  data: FlowData;
};

export const CustomNode = ({ data }: Props) => {
  const { nodeItem } = useNodeContext();
  return (
    <Paper
      onClick={() => {
        nodeItem.set(data);
      }}
      elevation={3}
      style={{ padding: "16px", borderRadius: "8px", border: "2px solid #ccc" }}
    >
      <Stack direction="row" spacing={1}>
        <Avatar
          style={{ width: "48px", height: "48px", backgroundColor: "#eee" }}
        >
          {data.emoji}
        </Avatar>
        <Stack spacing={1}>
          <Link
            href={`/posts/${data.slug}`}
            passHref
            // target={props.path.startsWith("http") ? "_blank" : "_self"}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {data.title}
            </Typography>
            <Typography variant="body2" style={{ color: "#888" }}>
              {data.excerpt}
            </Typography>
          </Link>
        </Stack>
      </Stack>
      <Handle
        type="target"
        position={Position.Top}
        style={{ width: "64px", backgroundColor: "#009688" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ width: "64px", backgroundColor: "#009688" }}
      />
    </Paper>
  );
};
