/** @format */

import * as React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./Navbar"
import Report from "./Report"
import Integrations from "./Integrations"

//images

import logo from "../images/logo.png"
import adminAvatar from "../images/adminAvatar.png"

//////////////////

//icons
import integrationsIcon from "../images/IntegrationsIcon.png"
import noteIcon from "../images/noteIcon.png"
import factoryIcon from "../images/factoryIcon.png"
import supportIcon from "../images/supportIcon.png"
import { BiLogOut } from "react-icons/bi"
import Manage from "./Manage"
import Support from "./Support"
////

const obj = [
  {
    title: "Reports",
    img: noteIcon,
    path: "/reports",
  },
  {
    title: "Factory",
    img: factoryIcon,
    path: "/",
  },
  {
    title: "Integrations",
    img: integrationsIcon,
    path: "/integrations",
  },
  {
    title: "Support",
    img: supportIcon,
    path: "/support",
  },
]

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
)

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const active = [false, true, false, false]

const AsideMenu = () => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [activeNumber, setActiveNumber] = React.useState(1)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleActive = (key) => {
    console.log("key", key)
    active[activeNumber] = false
    active[key] = true
    setActiveNumber(key)
  }

  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap component="div">
                <Navbar />
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <div>
                <img src={logo} alt="" />
              </div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>

            <List>
              <div className="side-menu-list">
                {obj.map((res, index) => (
                  <Link
                    onClick={() => handleActive(index)}
                    key={index}
                    className="link"
                    to={res.path}
                  >
                    <ListItem
                      className={active[index] ? "link-active" : "link"}
                      key="Factory"
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <img src={res.img} alt="" />
                        </ListItemIcon>
                        <ListItemText
                          className="menu-text"
                          primary={res.title}
                        />{" "}
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </div>
              <div>
                <div className="side-menu-log-out">
                  <div className="side-menu-log-out-info">
                    <div>
                      <img src={adminAvatar} alt="" />
                    </div>
                    <div className="admin-info">
                      <span className="log-out-name">Matthew Perry</span>
                      <span className="log-out-email">mathewperry@xyz.com</span>
                    </div>
                  </div>
                  <div className="log-out-part">
                    <BiLogOut className="log-out-icon" />
                    <span>Log out</span>
                  </div>
                </div>
              </div>
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />

            <Routes>
              <Route path="/" element={<Manage />}></Route>
              <Route path="/integrations" element={<Integrations />}></Route>
              <Route path="/reports" element={<Report />}></Route>
              <Route path="/support" element={<Support />}></Route>
            </Routes>
          </Main>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default AsideMenu
