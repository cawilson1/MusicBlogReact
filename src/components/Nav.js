import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    width: "100vw",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav({
  setUserName,
  isLoggedIn,
  setIsLoggedIn,
  setPassword,
  userName,
  password,
  createBlog,
  setCreateBlog,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Typography className={classes.title} variant="h6">
              Brian and Scott's Music Blog
            </Typography>
          </IconButton>
        </Toolbar>
        <Toolbar>
          <Login
            setUserName={setUserName}
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            userName={userName}
            password={password}
            createBlog={createBlog}
            setCreateBlog={setCreateBlog}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
