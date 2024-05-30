import Category from "../interfaces/Category";

function findById(categories: Category[], id: string): Category | null {
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

function deleteById(categories: Category[], id: string): Category[] {
    return categories.reduce<Category[]>((acc, category) => {
        if (category.id === id) {
            return acc
        }
        if (category.subCategories) {
            category.subCategories = deleteById(category.subCategories, id)
        }
        acc.push(category)
        return acc
    }, [])
}

export default {
    findById,
    deleteById
}