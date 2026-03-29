import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes";
import CartProvider from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
