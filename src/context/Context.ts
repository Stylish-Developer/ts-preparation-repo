import { updatedAction } from "./UserContextProvider";
import { createContext } from "react";
import { theme } from "./theme";
import { AuthProps } from "../auth";

// -- context created
export const ThemeContext = createContext(theme);
export const userContext = createContext({} as updatedAction);
export const AuthContext = createContext({} as AuthProps);
