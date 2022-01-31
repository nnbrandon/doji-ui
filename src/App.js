import { useState, Fragment, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import AppRouter from "./AppRouter";
import themeContext from "./themeContext";
import BrandingProvider from "./BrandingProvider";

function App() {
  const upperTheme = useTheme();
  const mode = upperTheme.palette.mode;
  const [themeMode, setThemeMode] = useState(mode);

  function toggleMode() {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <Fragment>
      <themeContext.Provider value={{ mode: themeMode, setMode: toggleMode }}>
        <BrandingProvider>
          <AppRouter />
        </BrandingProvider>
      </themeContext.Provider>
    </Fragment>
  );
}

export default App;
