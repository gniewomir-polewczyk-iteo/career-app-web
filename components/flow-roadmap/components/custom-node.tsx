import { FC } from "react";
import { Handle, Position } from "reactflow";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FlowData } from "../../../types";
import { useNodeContext } from "../providers/node-context-provider";
import Link from "next/link";

type Props = {
  data: FlowData;
};

export const CustomNode: FC<Props> = ({ data }) => {
  console.log(data);

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
