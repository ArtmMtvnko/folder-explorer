import { FC, useContext, useState } from "react";
import Category from "../interfaces/Category";
import { CategoryContext } from "../App";
import treeExplorer from "../utils/treeExplorer";

interface CategoryProps {
    category: Category
}

const CategoryItem: FC<CategoryProps> = ({ category }) => {
    const [shown, setShown] = useState(false)
    const { categories, setCategories } = useContext(CategoryContext)

    const collapseExpand = () => setShown(prev => !prev)

    const deleteCategory = () => {
        setCategories(treeExplorer.deleteById(categories, category.id))
    }

    return (
        <li>
            {category.subCategories.length !== 0 &&
            <button onClick={collapseExpand}>{shown ? '-' : '+'}</button>}

            <span>{category.name}</span>

            <button onClick={deleteCategory}>Delete</button>

            {category.subCategories.length !== 0 && shown &&
            category.subCategories.map(subCategory =>
                <ul key={subCategory.id}>
                    <CategoryItem category={subCategory} />
                </ul>
            )}
        </li>
    )
}

export default CategoryItem