const SortDropdown = ({ sort, handleSortChange, isLoading }) => {
    return (
        <div className="flex justify-end mb-4">
            <div className="relative">
                <select
                    value={sort}
                    onChange={handleSortChange}
                    disabled={isLoading} // Deshabilitar el dropdown
                    className="select select-bordered max-w-xs text-white bg-pink-600 focus:bg-pink-500 hover:bg-pink-500"
                >
                    <option value="id">Ordenar por</option>
                    <option value="price">Precio (Menor a Mayor)</option>
                    <option value="price,desc">Precio (Mayor a Menor)</option>
                    <option value="name">Nombre (A-Z)</option>
                    <option value="name,desc">Nombre (Z-A)</option>
                </select>
                {isLoading && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="loading loading-spinner loading-sm text-pink-600"></span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SortDropdown;