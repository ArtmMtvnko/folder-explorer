import treeExplorer from '../src/utils/treeExplorer'
import Category from '../src/interfaces/Category'

test('find category by id', () => {
    const testCategories: Category[] = [
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
    ]

    treeExplorer.deleteById(testCategories, 'qwerty')

    expect(testCategories)
        .toEqual([
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
        ])
})

test('try to find non-existent category', () => {
    const testCategories: Category[] = [
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
    ]

    treeExplorer.deleteById(testCategories, 'non-exist123')

    expect(testCategories)
        .toEqual(testCategories)
})

test('find most nested category by id', () => {
    const testCategories: Category[] = [
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
    ]

    treeExplorer.deleteById(testCategories, '0987654321')

    expect(testCategories)
        .toEqual([
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
        ])
})