import { FC, useState } from "react";
import Category from "../interfaces/Category";

interface CategoryProps {
    category: Category
}

const CategoryItem: FC<CategoryProps> = ({ category }) => {
    const [shown, setShown] = useState(false)

    const collapseExpand = () => setShown(prev => !prev)

    return (
        <li>
            {category.subCategories.length !== 0 &&
            <button onClick={collapseExpand}>{shown ? '-' : '+'}</button>}

            <span>{category.name}</span>

            <button>Delete</button>

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