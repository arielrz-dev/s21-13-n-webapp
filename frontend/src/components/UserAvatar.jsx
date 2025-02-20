import React from 'react';

export default function UserAvatar() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.freepik.com/vector-gratis/lindo-pinguino-ilustracion-vector-dibujos-animados-pescado-vector-aislado-concepto-fauna-animal-estilo-dibujos-animados-plana_138676-1932.jpg?t=st=1739757203~exp=1739760803~hmac=ec518ce9f1ccb09c44be94cb5a60a6407753dccaaa53216c42b7f2b56b01c3f4&w=740" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    );
}