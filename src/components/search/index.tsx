import "./Search.css";

export default function Search() {

    function onSubmit() {
        
    }

    return (
        <form className="Search" onSubmit={onSubmit}>
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search character"
            />
            <select name="gender">
                <option value="" selected>
                    Gender
                </option>
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <select name="species">
                <option value="" selected>
                    Species
                </option>
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
        </form>
    );
}
