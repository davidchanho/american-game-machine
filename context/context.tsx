import produce from "immer";
import { nanoid } from "nanoid";
import React, { createContext, useContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";
import app from "./app";
import company from "./company";
import news, { INews } from "./news";
import products, { IProduct } from "./products";
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

type IAction =
  | { type: "CREATE_NEWS"; payload: INews }
  | {
      type: "DELETE_NEWS";
      payload: INews;
    }
  | {
      type: "UPDATE_NEWS";
      payload: INews;
    }
  | {
      type: "CREATE_PRODUCT";
      payload: IProduct;
    }
  | {
      type: "DELETE_PRODUCT";
      payload: IProduct;
    };

export const reducer = (state = contextState, action: IAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "CREATE_NEWS":
        draft.news = [
          ...draft.news,
          {
            id: nanoid(),
            title: action.payload.title,
            body: action.payload.body,
            date: new Date().toDateString(),
          },
        ];
        return draft;
      case "DELETE_NEWS":
        draft.news = [
          ...draft.news.filter((news) => news.id !== action.payload.id),
        ];
        return draft;
      case "UPDATE_NEWS":
        return {
          ...state,
        };
      case "CREATE_PRODUCT":
        draft.products = [
          ...draft.products,
          {
            id: nanoid(),
            type: action.payload.type,
            label: action.payload.label,
            description: action.payload.description,
            screens: action.payload.screens,
            materials: action.payload.materials,
            colors: action.payload.colors,
            overview: {
              numberOfPlayers: action.payload.overview.numberOfPlayers,
            },
            games: action.payload.games,
            image: action.payload.image,
          },
        ];
        return draft;
      case "DELETE_PRODUCT":
        draft.products = [
          ...draft.products.filter(
            (product) => product.id !== action.payload.id
          ),
        ];
        return draft;
      default:
        return draft;
    }
  });

export function useAppContext() {
  return useContext(AppContext);
}
