import Category from "../src/interfaces/Category"
import treeExplorer from "../src/utils/treeExplorer"

describe('test for adding category (with other nested categories) in tree', () => {
    test('regular category addition', () => {
        const testCategories: Category[] = [
            {
                id: '1234',
                name: 'Main of the main',
                subCategories: [
                    {
                        id: 'asdf',
                        name: 'In main',
                        subCategories: []
                    }
                ]
            }
        ]

        expect(treeExplorer.addById(testCategories, '1234', {
            id: 'qwerty',
            name: 'Test',
            subCategories: [
                {
                    id: '0987654321',
                    name: 'most nested',
                    subCategories: []
                }
            ]
        },))
        .toEqual([
            {
                id: '1234',
                name: 'Main of the main',
                subCategories: [
                    {
                        id: 'asdf',
                        name: 'In main',
                        subCategories: []
                    },
                    {
                        id: 'qwerty',
                        name: 'Test',
                        subCategories: [
                            {
                                id: '0987654321',
                                name: 'most nested',
                                subCategories: []
                            }
                        ]
                    }
                ]
            }
        ])
    })

    test('add most nested category', () => {
        const testCategories: Category[] = [
            {
                id: '1234',
                name: 'Main of the main',
                subCategories: [
                    {
                        id: 'qwerty',
                        name: 'Test',
                        subCategories: []
                    },
                    {
                        id: 'asdf',
                        name: 'In main',
                        subCategories: []
                    }
                ]
            }
        ]

        expect(treeExplorer.addById(testCategories, 'qwerty', {
            id: '0987654321',
            name: 'most nested',
            subCategories: []
        },))
        .toEqual([
            {
                id: '1234',
                name: 'Main of the main',
                subCategories: [
                    {
                        id: 'qwerty',
                        name: 'Test',
                        subCategories: [
                            {
                                id: '0987654321',
                                name: 'most nested',
                                subCategories: []
                            }
                        ]
                    },
                    {
                        id: 'asdf',
                        name: 'In main',
                        subCategories: []
                    }
                ]
            }
        ])
    })

    test('added category by non-exicted id', () => {
        const testCategories: Category[] = [
            {
                id: '1234',
                name: 'Main of the main',
                subCategories: [
                    {
                        id: 'qwerty',
                        name: 'Test',
                        subCategories: []
                    },
                    {
                        id: 'asdf',
                        name: 'In main',
                        subCategories: []
                    }
                ]
            }
        ]

        expect(treeExplorer.addById(testCategories, 'non-excisted1234', {
            id: '0987654321',
            name: 'most nested',
            subCategories: []
        },))
        .toEqual(testCategories)
    })
})