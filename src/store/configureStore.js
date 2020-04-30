import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
  ));

// удалили "начальное состояние = initial state"
// так как теперь наш редьюсер составной,
// и нам нужны initialState каждого редьюсера.
// Это будет сделано автоматически.

