import {useState} from "react";
import {GifGrid,AddCategory} from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return
        }

        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={ onAddCategory}
            />
            {
                categories.map((category)=>(
                    <GifGrid
                    key={category} // por que paso aqui la key ?
                    category={category}
                    />
                ))
            }

        </>
    )
}