// import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CheckboxListSecondary() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function f() {
      const response = await axios.get("https://dummyapi.io/data/v1/user", {
        headers: { "app-id": "65b3908f727ec28b26911e81" },
      });

      const responseObject = response.data;
      setUsers([...responseObject.data]);
      //   console.log(response.data.data);
    }
    f();
  }, []);

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem key={user.id} disablePadding>
            <Link className="Link" to={`/user/${user.id}`}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${user.firstName}`}
                    src={user.picture}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={user.firstName + " " + user.lastName}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
