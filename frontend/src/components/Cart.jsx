"use client";
import { useEffect, useState } from 'react';
import { IoMdCart } from "react-icons/io";
import useCartStore from '@/store/cartStore';
import useAuthStore from '@/store/authStore';
import { div } from 'framer-motion/client';
import CartItem from '@/components/Cart/CartItem';
import PayButton from '@/components/PayButton';

export default function Cart() {
    const { items, fetchCartItems, getTotalItems, getTotalPrice } = useCartStore();
    const { token } = useAuthStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (false) {
            fetchCartItems();
        }
    }, [token]);

    if (!isMounted) return null

    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="rounded-none hover:bg-pink-200 btn btn-ghost lg:btn-lg">
                <div className="indicator flex flex-col items-center justify-center">
                    <IoMdCart size={30} className='text-black' />
                    <span className="text-[9px] text-black font-bold">CARRITO</span>
                    {totalItems > 0 && (
                        <span className="badge badge-xs text-[8px] border-0 text-white indicator-item top-[6px] left-[16px] bg-pink-700 bg-opacity-80">
                            {totalItems}
                        </span>
                    )}
                </div>
            </div>

            <div tabIndex={0} className="card card-compact dropdown-content bg-white z-[50] mt-3 mr-3 min-w-80  shadow">
                <div className="card-body">
                    <span className="text-lg font-bold text-center text-pink-600">{totalItems} Productos</span>
                    <div className="max-h-60 overflow-y-auto">
                        {items.map((item) => (
                            <CartItem key={item.productId} item={item} />
                        ))}
                    </div>
                    <span className="text-info text-end font-semibold my-2">Total: ${totalPrice}</span>
                    <div className="card-actions">
                        {/* <button className="btn btn-primary btn-block">Ver carrito</button> */}
                        <PayButton items={items} />
                    </div>
                </div>
            </div>
        </div>
    );
}