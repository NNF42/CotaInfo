import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import LoginTest from "./pages/LoginTest";

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path="landing-page" element={<LandingPage />} />
            <Route path="login" element={<Login/>}/>
            <Route path="/" element={<LandingPage />} />
            <Route path="logintest" element={<LoginTest></LoginTest>}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
