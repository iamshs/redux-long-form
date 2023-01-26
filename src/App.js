import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import store from "./redux/store";


function App() {
  return (
    <div >
      <Provider store={store} >
      <RouterProvider router={routes} />
      </Provider>
    
    </div>
  );
}

export default App;
