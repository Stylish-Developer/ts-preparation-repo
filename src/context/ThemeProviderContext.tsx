import { ThemeContext } from "./Context";
import { theme } from "./theme";

type ChildrenProps = {
  children: React.ReactNode;
};

const ThemeProviderContext = ({ children }: ChildrenProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProviderContext;
