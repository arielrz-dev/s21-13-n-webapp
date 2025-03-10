const Pagination = ({ page, totalPages, handlePageChange }) => {
    return (
        <div className="join flex justify-center mt-6">
            <button 
                className="join-item btn bg-pink-400 text-white hover:bg-pink-600" 
                disabled={page === 0} 
                onClick={() => handlePageChange(page - 1)}>
                «
            </button>
            <button className="join-item btn" 
            onClick={() => handlePageChange(0)}
            >Página {page + 1} de {totalPages}</button>
            <button 
                className="join-item btn bg-pink-400 text-white hover:bg-pink-600" 
                disabled={page >= totalPages - 1} 
                onClick={() => handlePageChange(page + 1)}>
                »
            </button>
        </div>
    );
};

export default Pagination;