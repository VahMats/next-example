const Conteiner = ({ children }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 mx-52 gap-12"> 
            { children }
        </div>
    );
};

export default Conteiner;