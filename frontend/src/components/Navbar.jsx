import React from 'react';
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import Cart from './Cart';
import UserAvatar from './UserAvatar';
import ThemeMenu from './UI/ThemeMenu';
import { ADLaM_Display } from "next/font/google";
import  LoginModal from './LoginModal';
import AuthModal from './AuthModal';

const adlamDisplay = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
  });

export default function Navbar() {
    const menuItems = [
        { label: 'Item 1', href: '/item1' },
        { 
            label: 'Parent', 
            href: '/parent', 
            submenu: [
                { label: 'Submenu 1', href: '/parent/submenu1' },
                { label: 'Submenu 2', href: '/parent/submenu2' },
            ],
        },
        { label: 'Item 3', href: '/item3' },
    ];

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <DropdownMenu items={menuItems} />
                </div>
                <Link href="/" className={`${adlamDisplay.className} mx-5 text-2xl`}>
                <span className="text-black">Fres</span>
                <span className="text-pink-600">ko</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.submenu ? (
                                <details>
                                    <summary>
                                        <Link href={item.href}>{item.label}</Link>
                                    </summary>
                                    <ul className="p-2">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.href}>{subItem.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link href={item.href}>{item.label}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-5">
                    {/* <ThemeMenu /> */}
                    {/* <LoginModal /> */}
                    <AuthModal />
         
                    <Cart />
                    {/* <UserAvatar /> */}
                </div>
            </div>
        </div>
    );
}