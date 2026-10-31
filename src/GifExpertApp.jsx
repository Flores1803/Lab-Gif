import { useState } from "react";
import AddCategory from "./components/AddCategory"; 
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => { 
        if (categorias.includes(newCategory)) return; 

        setCategorias([newCategory, ...categorias]); 
    };

    return ( 
        <div>
            <h1>App de gifs</h1>

            <AddCategory onAddCategory={onAddCategory} />


            {categorias.map((categoria) => {
                return (
                    <GifGrid key={categoria} category={categoria} />
                );
            })}
        </div>
    );
};

export default GifExpertApp;