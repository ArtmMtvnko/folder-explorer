import { createContext, useEffect, useState } from 'react'
import Category from './interfaces/Category'
import CategoryItem from './components/CategoryItem'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

export type TypeCategoryContext = {
  categories: Category[],
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>
}

export const CategoryContext = createContext<TypeCategoryContext>({
  categories: [],
  setCategories: () => {}
})

function App() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const testCategories: Category[] = [
      {
        id: uuidv4(),
        name: 'Main of the main',
        subCategories: [
          {
            id: uuidv4(),
            name: 'Test',
            subCategories: []
          },
          {
            id: uuidv4(),
            name: 'In main',
            subCategories: [
              {
                id: uuidv4(),
                name: 'third layer',
                subCategories: [
                  {
                    id: uuidv4(),
                    name: 'last',
                    subCategories: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: uuidv4(),
        name: 'Second main',
        subCategories: []
      }
    ]

    setCategories(testCategories)
  }, [])

  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
          Test
          <ul>
            <li>11</li>
            <li>22</li>
          </ul>
        </li>
      </ul>
      <CategoryContext.Provider value={{ categories, setCategories }}>
        <ul>
          {categories.map(category => <CategoryItem key={category.id} category={category} />)}
        </ul>
      </CategoryContext.Provider>
    </>
  )
}

export default App
