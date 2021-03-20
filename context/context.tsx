import React, { createContext, useContext } from "react";
import { ContextDevTool } from "react-context-devtool";
import linksState from "./links";
import photosState from "./photos";
import productsState from "./products";
import serviceState from "./services";

export const appState = {
  name: "American Game Machine",
  logo: "/svg/logo.svg",
  ...linksState,
  ...serviceState,
  ...photosState,
  ...productsState,
};

export const AppContext = createContext(appState);

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={appState}>
      {(values) => {
        if (window._REACT_CONTEXT_DEVTOOL) {
          window._REACT_CONTEXT_DEVTOOL({
            id: "amg-id",
            displayName: "American Game Machine Context",
            values,
          });
        }
        return null;
      }}
      <ContextDevTool
        context={AppContext}
        id="amg-id"
        displayName="American Game Machine Context"
      />
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
