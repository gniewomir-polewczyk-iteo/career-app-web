import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

type Props = {
  label: string;
  icon?: React.ReactNode;
  path?: string;
};

const DrawerItem: React.FC<Props> = (props) => {
  const router = useRouter();
  const isActive = router.asPath === `/posts/${props.path}`;

  return (
    <Link
      href={`/posts/${props.path}`}
      passHref
      target={props.path.startsWith("http") ? "_blank" : "_self"}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          width: "100%",
          p: "16px",
          borderRadius: 1,
          backgroundColor: isActive ? "#2F2F38" : "transparent",
          color: isActive ? "primary.contrastText" : "#737383",
          cursor: "pointer",
          "&:hover": {
            color: "primary.contrastText",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          sx={{
            width: "100%",
            borderRadius: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              pt: 0.4,
            }}
          >
            {props.label}
          </Typography>
          <LaunchIcon
            sx={{
              ml: "auto",
            }}
          />
        </Stack>
      </Stack>
    </Link>
  );
};

export default DrawerItem;
