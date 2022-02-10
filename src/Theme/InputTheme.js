import { ThemeProvider, createTheme } from "@mui/material/styles";
export const InputTheme = createTheme({
  components: {
    // Name of the component

    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#424242",
          },
          "& label.Mui-focused": {
            color: "#424242",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
            borderRadius: "0.5rem",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              borderRadius: "0.5rem",
            },
            "&:hover fieldset": {
              borderColor: "white",
              borderWidth: "0.15rem",
              borderRadius: "0.5rem",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
              borderRadius: "0.5rem",
            },
          },
        },
      },
    },
    // MuiSelect: {
    //   styleOverrides: {
    //     select: {},
    //   },
    // },
  },
});
