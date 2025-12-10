// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,      // default
            smallMobile: 322,
            mediumMobile: 375,
            largeMobile: 475,
            sm: 600,    // normal MUI small
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
