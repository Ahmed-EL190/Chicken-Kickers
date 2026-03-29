import { useContext } from "react";
import { CartContext } from "../../context/CartContextValue";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg text-center mt-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h2>
        <p className="mt-4 text-gray-500">Your cart is empty. Start adding meals!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h2>
        <button
          onClick={clearCart}
          className="text-sm text-red-600 hover:text-red-700 font-semibold"
        >
          Clear All
        </button>
      </div>

      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
            <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm font-semibold">
              Image
            </div>

            <div className="flex-1 ml-4">
              <p className="text-lg font-bold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.price.toLocaleString()} EGP each</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-gray-700"
                >
                  −
                </button>
                <span className="px-2 font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            <div className="ml-4 text-right">
              <p className="text-lg font-bold text-orange-600">{(item.price * item.quantity).toLocaleString()} EGP</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-red-500 hover:text-red-700 font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Total: <span className="text-orange-600">{total.toLocaleString()} EGP</span>
        </div>
        <button className="mt-4 md:mt-0 px-8 py-3 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}