const Search = () => {
    return (
        <header>
            <h2 className="header__title">Encuentra hoy la casa de tus sueños.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Ingresa el nombre del barrio,ciudad o codigo postal"
            />
        </header>
    );
}

export default Search;