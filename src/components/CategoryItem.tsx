import { FC, useContext, useState } from "react";
import Category from "../interfaces/Category";
import { CategoryContext, TypeCategoryContext } from "../App";
import treeExplorer from "../utils/treeExplorer";
import { v4 as uuidv4 } from 'uuid';

interface CategoryProps {
    category: Category
}

const CategoryItem: FC<CategoryProps> = ({ category }) => {
    const [shown, setShown] = useState(false)
    const { categories, setCategories } = useContext<TypeCategoryContext>(CategoryContext)

    const collapseExpand = (): void => setShown(prev => !prev)

    const deleteCategory = (): void => {
        setCategories(treeExplorer.deleteById(categories, category.id))
    }

    const addCategory = (): void => {
        const name = prompt('Enter name of category: ')
        if (name) {
            setCategories(treeExplorer.addById(categories, category.id, {
                id: uuidv4(),
                name: name?.trim() ? name : 'New category',
                subCategories: []
            }))
        }
    }

    const rename = (): void => {
        const renamed = prompt('Enter new name of category: ')
        if (renamed) {
            const categoryToRename = treeExplorer.findById(categories, category.id)
            categoryToRename!.name = renamed
            console.log(categories)
            setCategories([...categories])
        }
    }

    return (
        <li>
            <ul>
                {
                <button onClick={collapseExpand}>{shown ? '-' : '+'}</button>}

                <span onDoubleClick={rename}>{category.name}</span>

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