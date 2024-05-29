import { FC } from "react";
import Category from "../interfaces/Category";

interface CategoryProps {
    category: Category
}

const CategoryItem: FC<CategoryProps> = ({ category }) => {
    return (
        <li>
            {category.id}
            {category.subCategories.length !== 0 &&
            category.subCategories.map(subCategory =>
                <ul key={subCategory.id}>
                    <CategoryItem category={subCategory} />
                </ul>
            )}
        </li>
    )
}

export default CategoryItem