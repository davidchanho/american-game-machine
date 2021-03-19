import produce from "immer";
import React, { createContext, useContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";
import app from "./app";
import company from "./company";
import news from "./news";
import products from "./products";
import services from "./services";

const contextState = {
  ...app,
  ...company,
  ...news,
  ...products,
  ...services,
};

export const AppContext = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({
  state: contextState,
  dispatch: () => null,
});
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, contextState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
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

enum ActionTypes {
  LOADING_NEWS = "LOADING_NEWS",
  LOADING_PRODUCTS = "LOADING_PRODUCTS",
}

type IAction =
  | { type: ActionTypes.LOADING_NEWS }
  | { type: ActionTypes.LOADING_PRODUCTS };

export const reducer = (state = contextState, action: IAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOADING_NEWS:
        draft.loadingNews = true;
        return draft;
      case ActionTypes.LOADING_PRODUCTS:
        draft.loadingProducts = true;
        return draft;
      default:
        return draft;
    }
  });

export function useAppContext() {
  return useContext(AppContext);
}
