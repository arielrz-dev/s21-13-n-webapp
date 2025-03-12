import React from 'react';
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation"; // Importamos useRouter
import Link from 'next/link';

export default function UserAvatar() {
    const { user, logout } = useAuthStore();
    const router = useRouter(); // Usamos el hook useRouter
    const imgDefault = "https://img.freepik.com/vector-gratis/lindo-pinguino-ilustracion-vector-dibujos-animados-pescado-vector-aislado-concepto-fauna-animal-estilo-dibujos-animados-plana_138676-1932.jpg?t=st=1739757203~exp=1739760803~hmac=ec518ce9f1ccb09c44be94cb5a60a6407753dccaaa53216c42b7f2b56b01c3f4&w=740";

    const handleLogout = () => {
        logout(); // Ejecutamos la función logout
        router.push("/"); // Redirigimos al home 
    };

    return (
        <div className="dropdown dropdown-end lg:mt-2">
            <div className=''>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-pink-400">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Avatar del usuario"
                            src={user?.imageProfile || imgDefault} />
                    </div>
                </div>
                {/* <span className='mt-0 p-0'>{user.username}</span> */}
            </div>



            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-40 p-2 shadow text-black">
                <span className='bg-black text-white rounded-t-xl text-center mb-2'>
                    {user.username} 
                </span>
                <li>
                    <Link href="/profile" className="justify-between hover:bg-pink-400">
                        Perfil
                        <span className="badge text-black text-xs">
                            {user.role.replace("ROLE_", "")}
                        </span>
                    </Link>
                </li>
                {/* <li><a className='hover:bg-pink-400'>{user.username}</a></li>
                <li><a className='hover:bg-pink-400'>{user.role || ".."}</a></li> */}
                <li><a className='hover:bg-pink-400'>Settings</a></li>
                <li><a onClick={handleLogout} className='hover:bg-pink-400'>Logout</a></li>
            </ul>
        </div>
    );
}