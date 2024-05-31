import Category from "../interfaces/Category";

function findById(categories: Category[], id: string): Category | null {
    for (const category of categories) {
        if (category.id === id) {
            return category
        }

        if (category.subCategories) {
            const found = findById(category.subCategories, id)
            if (found) {
                return found
            }
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

function addById(categories: Category[], id: string, categoryToAdd: Category): Category[] {
    return categories.map(category => {
        if (category.id === id) {
            return {
                ...category,
                subCategories: category.subCategories ? [...category.subCategories, categoryToAdd] : [categoryToAdd]
            };
        }

        if (category.subCategories) {
            return {
                ...category,
                subCategories: addById(category.subCategories, id, categoryToAdd)
            };
        }

        return category;
    });
}

export default {
    findById,
    deleteById,
    addById
}