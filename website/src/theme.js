import { createTheme } from '@material-ui/core/styles';

const acBlue = "#3c5abe"
const acGray= "#707070"

export default createTheme({
  palette: {
    common: {
      blue: `${acBlue}`,
      gray: `${acGray}`
    },
    primary: {
      main: `${acBlue}`
    },
    secondary: {
      main: "#FFFFFF"
    }
  },
  typography: {
    tab: {
      fontFamily: "Lato",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1em",
    },
  }
})
