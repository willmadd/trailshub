import { ThemeProvider, createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const theme = createTheme({
    typography: {
        fontFamily: "Spartan",
        h2: {
            color: "black",
            fontSize: 48,
            fontWeight: 400,
            lineHeight: 5 / 4,
        },
        h6: {
            color: "#0097BA",
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 4 / 3,
        },
        button:{
            fontFamily: 'nunito'
        }
    },
    palette: {
        secondary: {
            main: "#F49D37",
        },
        primary: {
            one: "#DFECF6",
            two: "#408ec9",
            main: "#140F2D",
            three:"#D7E7F4"
        },
        bold: {
            one: "#F22B29",
            two: "#D72638",
            main: "#D72638",
        },
        white:"#FFFFFF"
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    fontFamily: "Spartan",
                    textTransform: "capitalize",
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    // backgroundColor: "transparent",
                    // border: 0,
                    // boxShadow: "none",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    // backgroundColor: "transparent",
                    // border: 0,
                    // boxShadow: 0,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // apply theme's border-radius instead of component's default
                },
                outlinedPrimary: {
                    // borderColor: "transparent",
                },
            },
        },
    },
});

export default theme;
