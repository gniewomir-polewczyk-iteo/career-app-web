import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const DrawerSection: React.FC<Props> = (props) => {
  const { title, children } = props;
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    localStorage.setItem(title, `${!expanded}`);
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (localStorage.getItem(title) === "true") {
      setExpanded(true);
    }
  }, [expanded]);

  return (
    <Stack direction="column">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: "12px", cursor: "pointer" }}
        onClick={handleToggle}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "primary.contrastText", textTransform: "uppercase" }}
        >
          {title}
        </Typography>
        {expanded ? (
          <ExpandLessIcon sx={{ color: "primary.contrastText" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "primary.contrastText" }} />
        )}
      </Stack>
      {expanded && children}
    </Stack>
  );
};

export default DrawerSection;
