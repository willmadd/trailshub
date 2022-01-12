import { alpha } from "@mui/material/styles";

export default {
    logo: { mr: 2, display: { xs: "none", md: "flex" } },
    hamburger: {
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
    },
    dtMenu: {
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
    },
    menuItem: {
        my: 2,
        mx: 1,
        color: "white",
        display: "flex",
        alignItems: "center",
        ":hover": {
            color: "#D72638",
        },
    },
    iconButton: { p: 0 },
    boxHeadRight: { flexGrow: 0, display: "flex", alignItems: "center" },
    units: { display: "flex", alignItems: "center", mr: 2 },
    button: { mx: 1 },
    search: {
        position: "relative",
        borderRadius: 2,
        backgroundColor: alpha("#f0f", 0.15),
        "&:hover": {
            backgroundColor: alpha("#f0f", 0.25),
        },
        mx: 2,
        width: "300px",
        "[theme.breakpoints.up('sm')]": {
            marginLeft: 10,
            width: "auto",
        },
    },
    searchIcon: {
        padding: 1,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputBase: {
        px: 5,
        // maxWidth: "100px",
        color: "white",
        "& .thInputBase-input": {
            lineHeight:12,
            borderRadius: 2,
            px: 2,
            paddingLeft: 4,
            transition: "theme.transitions.create('width')",
            width: "100%",
            "[theme.breakpoints.up('md')]": {
                width: "20ch",
            },
        },
    },
};
