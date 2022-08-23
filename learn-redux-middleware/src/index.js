
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer, { rootSaga } from "./modules";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import creasteSagaMiddleware from "redux-saga";


const logger = createLogger();
const sagaMiddleware = creasteSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(logger, ReduxThunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')

);