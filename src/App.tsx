import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteContainer from "./routes";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="body-wrapper">
        <RouteContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
