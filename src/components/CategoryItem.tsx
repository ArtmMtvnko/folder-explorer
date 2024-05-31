import { FC, useContext, useState } from "react";
import Category from "../interfaces/Category";
import { CategoryContext } from "../App";
import treeExplorer from "../utils/treeExplorer";
import { v4 as uuidv4 } from 'uuid';

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

    const addCategory = () => {
        setCategories(treeExplorer.addById(categories, category.id, {
            id: uuidv4(),
            name: 'test added ca',
            subCategories: []
        }))
    }

    return (
        <li>
            <ul>
                {
                <button onClick={collapseExpand}>{shown ? '-' : '+'}</button>}

                <span>{category.name}</span>

                <button onClick={deleteCategory}>Delete</button>

                {category.subCategories.length !== 0 && shown &&
                category.subCategories.map(subCategory =>
                    <CategoryItem key={subCategory.id} category={subCategory} />
                )}

                {shown &&
                <li style={{listStyleType: 'none'}}>
                    <button onClick={addCategory}>Add</button>
                </li>}
            </ul>
        </li>
    )
}

export default CategoryItem