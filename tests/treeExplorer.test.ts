import treeExplorer from '../src/utils/treeExplorer'
import Category from '../src/interfaces/Category'

test('test test', () => {
    expect(1+2).toBe(3)
})

test('find id', () => {
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

    expect(treeExplorer.findById(testCategories, 'qwerty'))
        .toEqual({
            id: 'qwerty',
            name: 'Test',
            subCategories: [
                {
                    id: '0987654321',
                    name: 'most nested',
                    subCategories: []
                }
            ]
        })
})