import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
    </ThemeProvider>
  </BrowserRouter>,
);
