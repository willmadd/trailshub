import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputBase from "@mui/material/InputBase";
import { pages, accountToolTip, settings } from "./Header.config";
import styles from "./Header.styles";
import { Switch } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderComponent = ({
    handleCloseUserMenu,
    handleCloseNavMenu,
    handleOpenUserMenu,
    handleOpenNavMenu,
    anchorElNav,
    anchorElUser,
    user,
    imperial,
    toggleUnits,
    route,
}) => {
    console.log("--->", user.id);
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h1"
                        noWrap
                        component="div"
                        sx={styles.logo}
                    >
                        <img src="/images/THlogo.svg" height="34" />
                    </Typography>
                    <Box sx={styles.hamburger}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map(({ name, url, icon }) => (
                                <MenuItem
                                    key={name}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Button variant="contained" href={url}>
                                        <Typography textAlign="center">
                                            {name}
                                        </Typography>
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={styles.dtMenu}>
                        {pages.map(({ name, url, Icon }) => (
                            <Button
                                key={name}
                                onClick={handleCloseNavMenu}
                                sx={styles.menuItem}
                                href={url}
                                startIcon={<Icon />}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                    {route.url !== '/' && <Box sx={styles.search}>
                        <Box sx={styles.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            sx={styles.inputBase}
                            placeholder="Find local MTB Trails..."
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Box>
                    }
                    <Box sx={styles.boxHeadRight}>
                        <Box sx={styles.units}>
                            <Typography>Metric</Typography>
                            <Switch
                                color="secondary"
                                onChange={() => toggleUnits(!imperial)}
                            />
                            <Typography>Imperial</Typography>
                        </Box>
                        {user.id ? (
                            <>
                                <Tooltip title={accountToolTip}>
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={styles.iconButton}
                                    >
                                        <Avatar
                                            alt="Wemy Sharp"
                                            src="/static/images/avatar/2.jpg"
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    sx={styles.button}
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    sx={styles.button}
                                >
                                    Sign Up
                                </Button>
                                {/* <ButtonGroup
                                    variant="outlined"
                                    color="secondary"
                                    aria-label="outlined primary button group"
                                >
                                    <Button sx={styles.button}>Sign Up</Button>
                                    <Button sx={styles.button}>Log In</Button>
                                </ButtonGroup> */}
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HeaderComponent;
