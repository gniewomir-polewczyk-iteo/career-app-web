import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { Handle, Position } from "reactflow";
import { PostType } from "../../../types";
import Link from "next/link";

type Props = {
  data: PostType;
};

export const CustomNode = ({ data }: Props) => {
  return (
    <Link href={`/posts/${data.slug}`} passHref>
      <Paper
        elevation={3}
        style={{
          padding: "16px",
          borderRadius: "8px",
          border: "2px solid #ccc",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Avatar
            style={{ width: "48px", height: "48px", backgroundColor: "#eee" }}
          >
            {/* {data.emoji} */}
          </Avatar>
          <Stack spacing={1}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {data.title}
            </Typography>
            <Typography variant="body2" style={{ color: "#888" }}>
              {data.excerpt}
            </Typography>
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
    </Link>
  );
};
