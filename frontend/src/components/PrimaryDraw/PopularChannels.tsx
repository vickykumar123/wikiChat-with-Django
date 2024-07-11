import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import useCrud from "../../hooks/useCRUD";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {MEDIA_URL} from "../../config";

interface Server {
  id: number;
  name: string;
  category: string;
  icon: string;
}

type Props = {
  open: boolean;
};

export default function PopularChannels({open}: Props) {
  const {dataCRUD, error, isLoading, fetchData} = useCrud<Server>(
    [],
    "/server/select"
  );

  useEffect(() => {
    fetchData();
    console.log(dataCRUD);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Box
        sx={{
          height: 50,
          p: 2,
          display: "flex",
          alignItems: "center",
          flex: "1 1 100%",
        }}
      >
        <Typography sx={{display: open ? "block" : "none"}}>Popular</Typography>
      </Box>
      <List>
        {dataCRUD.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{display: "block"}}
            dense={true}
          >
            <Link
              to={`/server/${item.id}`}
              style={{textDecoration: "none", color: "inherit"}}
            >
              <ListItem sx={{minHeight: 0}}>
                <ListItemIcon sx={{minWidth: 0, justifyContent: "center"}}>
                  <ListItemAvatar sx={{minWidth: "50px"}}>
                    <Avatar
                      alt="Server Icon"
                      src={`${MEDIA_URL}${item.icon}`}
                    />
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        lineHeight: 1.2,
                        textOverflow: "ellipsis",
                        lineClamp: 1,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: "textSecondary",
                      }}
                    >
                      {item.category}
                    </Typography>
                  }
                  sx={{opacity: open ? 1 : 0}}
                  primaryTypographyProps={{
                    sx: {
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              </ListItem>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
