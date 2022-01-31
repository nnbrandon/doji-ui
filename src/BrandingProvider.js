import * as React from "react";
import { deepmerge } from "@mui/utils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens, getThemedComponents } from "./theme";
import themeContext from "./themeContext";
import { useContext } from "react";

export default function BrandingProvider({ children }) {
  const { themeMode } = useContext(themeContext);
  const theme = React.useMemo(() => {
    const designTokens = getDesignTokens(themeMode);
    let newTheme = createTheme(designTokens);
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));
    return newTheme;
  }, [themeMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
