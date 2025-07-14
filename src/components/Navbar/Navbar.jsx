import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import useStyles from "./styles";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import { setUser } from "../../features/auth";
import { fetchToken, createSessionId, moviesApi } from "../../utils/index";
import { ColorModeContext } from "../../utils/ToggleColorMode";

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [mobileOpen, setMobileOpen] = useState(false);

  const colorMode = useContext(ColorModeContext);

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
      >
        <AppBar
          position="fixed"
          elevation={4}
          sx={{
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg, #121212, #1f1f1f)"
                : "linear-gradient(90deg, #2196F3, #21CBF3)",
            color: "#fff",
          }}
        >
          <Toolbar className={classes.toolbar}>
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setMobileOpen((prev) => !prev)}
                edge="start"
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
            )}

            <Link to="/" className={classes.logoLink}>
              <img
                src="/logo.png"
                alt="Filmpire"
                style={{ height: 30, marginRight: 10 }}
              />
              <h3 className={classes.logoText}>FILMPIRE</h3>
            </Link>

            {!isMobile && (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "50px",
                }}
              >
                <Search />
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <Brightness7 />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>

              {!isAuthenticated ? (
                <Button
                  onClick={fetchToken}
                  sx={{
                    background: "linear-gradient(135deg, #FF6B6B, #FFD93D)",
                    color: "#000",
                    padding: "6px 16px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    textTransform: "none",
                    transition: "0.3s ease-in-out",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    '&:hover': {
                      background:
                        "linear-gradient(135deg, #FFD93D, #FF6B6B)",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Login&nbsp;
                  <AccountCircle />
                </Button>
              ) : (
                <Button
                  color="inherit"
                  component={Link}
                  to={`/profile/${user.id}`}
                  className={classes.linkButton}
                >
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    alt="Profile"
                    src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar?.avatar_path}`}
                  />
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </motion.div>

      <nav className={classes.drawer}>
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </>
  );
}

export default Navbar;
