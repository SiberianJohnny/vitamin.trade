import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "./components/MainPage/MainPage";
import { fetchSupplements } from "./store/reducers/ActionCreators";

function App() {
  const { isLoading, error } = useSelector((state) => state.supplementsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupplements);
  }, []);

  if (isLoading) {
    return (
      <h1
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          backgroundColor: "rgba(0, 0, 0, 0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </h1>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
