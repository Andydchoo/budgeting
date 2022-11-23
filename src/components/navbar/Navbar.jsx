import { NavbarDesktop, NavbarMobile } from "./NavbarSizes.jsx";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Navbar() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return(
        <div>
            {!matches && <NavbarDesktop />}
            {matches && <NavbarMobile />}
        </div>
    )
}