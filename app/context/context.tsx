import { nanoid } from "nanoid";
import { createContext, useContext, useReducer } from "react";
import accessories from "./accessories";
import company from "./company";
import news, { INews } from "./news";
import products, { IProduct } from "./products";
import services from "./services";

const contextState = {
  ...company,
  ...news,
  ...products,
  ...accessories,
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

export const reducer = (state = contextState, action: IAction) => {
  switch (action.type) {
    case "CREATE_NEWS":
      return {
        ...state,
        news: [
          ...state.news,
          {
            id: nanoid(),
            title: action.payload.title,
            body: action.payload.body,
            date: new Date().toDateString(),
          },
        ],
      };
    case "DELETE_NEWS":
      return {
        ...state,
        news: [...state.news.filter((news) => news.id !== action.payload.id)],
      };
    case "UPDATE_NEWS":
      return {
        ...state,
      };
    case "CREATE_PRODUCT":
      return {
        ...state,
        products: {
          ...state.products,
          id: nanoid(),
          label: action.payload.label,
          description: action.payload.description,
          screens: action.payload.screens,
          materials: action.payload.materials,
          overview: {
            numberOfPlayers: action.payload.overview.numberOfPlayers,
          },
          games: action.payload.games,
          image: action.payload.image,
        },
      };
    case "DELETE_PRODUCT":
      return [
        ...state.products.filter((product) => product.id !== action.payload.id),
      ];
    default:
      return state;
  }
};

export function useAppContext() {
  return useContext(AppContext);
}
