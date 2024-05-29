import Category from "../interfaces/Category";

const findById = (categories: Category[], id: string): Category | null => {
    for (const category of categories) {
        if (category.id === id) {
            return category
        }
        if (category.subCategories) {
            return findById(category.subCategories, id)
        }
    }
    return null
}

export default {
    findById
}