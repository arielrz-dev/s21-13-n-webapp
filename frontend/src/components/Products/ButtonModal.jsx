"use client";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";


export default function ButtonModal({ id }) {
    const modalId = `product_modal_${id}`; // Genera id del producto
  
    return (
      <div className="flex justify-center">
        <label htmlFor={modalId} className="rounded-full btn text-white bg-pink-600 hover:bg-pink-700  lg:btn-wide">
          <span className="">Ver detalle</span>
        </label>
  
        <input type="checkbox" id={modalId} className="modal-toggle" />
        <div className="modal max-w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box w-full max-w-[80%] lg:max-w-md p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-end">
              <label htmlFor={modalId} className="text-pink-600 hover:text-pink-700">
                <IoMdCloseCircleOutline size={26} />
              </label>
            </div>
  
            <div className="text-center text-black">
              Soy el modal de Productos id N° {id}
            </div>
          </div>
        </div>
      </div>
    );
  }
  