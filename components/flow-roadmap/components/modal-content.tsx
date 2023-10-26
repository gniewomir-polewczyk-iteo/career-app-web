import { List, ListItem, Stack, Typography } from "@mui/material";
import { useNodeContext } from "../providers/node-context-provider";

export const ModalContent = () => {
  const { nodeItem } = useNodeContext();
  const node = nodeItem.value;

  return (
    <Stack
      spacing={2}
      sx={{ padding: "20px", overflowY: "auto", maxWidth: "100%" }}
    >
      <Typography variant="h5">{`${node.emoji} ${node.name}`}</Typography>
      <Typography variant="subtitle1">{node.description}</Typography>
      {node.longDescription && (
        <Typography variant="body2">{node.longDescription}</Typography>
      )}
      {node.links && node.links.length > 0 && (
        <List>
          {node.links.map((link, index) => (
            <ListItem key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
};
