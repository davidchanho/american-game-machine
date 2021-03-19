import produce from "immer";
import React, { createContext, useContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";
import app from "./app";
import news, { INews } from "./news";
import products, { IProduct } from "./products";

const contextState = {
  app,
  news,
  products,
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
  LOADING_NEWS_SUCCESSFUL = "LOADING_NEWS_SUCCESSFUL",
  LOADING_NEWS_ERROR = "LOADING_NEWS_ERROR",
  LOADING_PRODUCTS = "LOADING_PRODUCTS",
  LOADING_PRODUCTS_SUCCESSFUL = "LOADING_PRODUCTS_SUCCESSFUL",
  LOADING_PRODUCTS_ERROR = "LOADING_PRODUCTS_ERROR",
}

type IAction =
  | { type: ActionTypes.LOADING_NEWS }
  | { type: ActionTypes.LOADING_NEWS_SUCCESSFUL; payload: INews[] }
  | { type: ActionTypes.LOADING_NEWS_ERROR }
  | { type: ActionTypes.LOADING_PRODUCTS }
  | { type: ActionTypes.LOADING_PRODUCTS_SUCCESSFUL; payload: IProduct[] }
  | { type: ActionTypes.LOADING_PRODUCTS_ERROR };

export const reducer = (state = contextState, action: IAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOADING_NEWS:
        draft.news.loading = true;
        return draft;
      case ActionTypes.LOADING_NEWS_SUCCESSFUL:
        draft.news.news = action.payload;
        return draft;
      case ActionTypes.LOADING_NEWS_ERROR:
        draft.news.loading = true;
        return draft;
      case ActionTypes.LOADING_PRODUCTS:
        draft.products.loading = true;
        return draft;
      case ActionTypes.LOADING_PRODUCTS_SUCCESSFUL:
        draft.products.products = action.payload;
        return draft;
      case ActionTypes.LOADING_PRODUCTS_ERROR:
        draft.products.loading = true;
        return draft;
      default:
        return draft;
    }
  });

export function useAppContext() {
  return useContext(AppContext);
}
