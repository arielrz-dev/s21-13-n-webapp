import { IoTrash } from "react-icons/io5";
import useCartStore from '@/store/cartStore';

export default function CartItem({ item }) {
    const removeItem = useCartStore((state) => state.removeItem);
    const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);

    const handleQuantityChange = (newAmount) => {
        if (newAmount < 1) return;
        updateItemQuantity(item.productId, newAmount);
    };

    return (
        <div className="flex justify-between items-center p-2 border-b">
            <div className="flex-1">
                <p className="font-semibold mb-2 text-xs">{item.productName}</p>
                <div className="flex items-center gap-2">
                    <button 
                        className="text-xs px-2 bg-gray-200 rounded hover:bg-pink-200"
                        onClick={() => handleQuantityChange(item.amount - 1)}
                    >
                        -
                    </button>
                    <span className="text-xs text-pink-500 w-4 text-center">{item.amount}</span>
                    <button 
                        className="text-xs px-2 bg-gray-200 rounded hover:bg-pink-200"
                        onClick={() => handleQuantityChange(item.amount + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="font-bold">${item.productPrice * item.amount}</span>
                <button 
                    onClick={() => removeItem(item.productId)}
                    className="text-red-500 hover:text-red-700"
                >
                    <IoTrash size={12} />
                </button>
            </div>
        </div>
    );
}