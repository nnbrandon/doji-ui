import { useState, Fragment, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import AppRouter from "./AppRouter";
import themeContext from "./themeContext";
import BrandingProvider from "./BrandingProvider";

function App() {
  const upperTheme = useTheme();
  const mode = upperTheme.palette.mode;
  const [themeMode, setThemeMode] = useState(mode);

  useEffect(() => {
    setThemeMode(mode);
  }, [mode]);

  return (
    <Fragment>
      <themeContext.Provider value={{ themeMode, setThemeMode }}>
        <BrandingProvider>
          <AppRouter mode={mode} />
        </BrandingProvider>
      </themeContext.Provider>
    </Fragment>
  );
}

export default App;
