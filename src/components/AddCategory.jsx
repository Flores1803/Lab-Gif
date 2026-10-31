import { useState } from "react";

const AddCategory = ({ onAddCategory }) => {
    const [newCategory, setNewCategory] = useState("");

    const envioDatos = (evento) => {
        evento.preventDefault(); // Evita recarga de página

        if (newCategory.trim().length <= 1) return; 

        setNewCategory(""); 
 
        onAddCategory(newCategory.trim()); 
    };

    return (
        <form onSubmit={(e) => {
            envioDatos(e);
        }}
        >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={newCategory} 
                onChange={(evento) => {
                    setNewCategory(evento.target.value)
                }}
            />
        </form>
    );
};

export default AddCategory;