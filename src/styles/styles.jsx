import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 850,
            laptop: 1024,
            desktop: 1280,
        },
        typography: {
            fontFamily: [
                'Arial',
                'MontSerrat',
            ]
        }
    }
})