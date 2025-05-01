import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";


export const store = createStore(
  rootReducer,
  undefined, // <- força a inferência correta de estado inicial
  applyMiddleware(logger)
);

// import { createStore, applyMiddleware, Store } from "redux";
// import logger from "redux-logger";
// import { rootReducer, RootReducer } from "./root-reducer";

// export const store: Store<RootReducer> = createStore(
//   rootReducer,
//   applyMiddleware(logger)
// );


