import { CalculatorDesktop, CalculatorMobile } from "./CalculatorSizes.jsx";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function Calculator() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return(
        <div>
            {!matches && <CalculatorDesktop />}
            {matches && <CalculatorMobile />}
        </div>
    )
}