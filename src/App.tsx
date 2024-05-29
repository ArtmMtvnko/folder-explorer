import { useEffect, useState } from 'react'
import './App.css'
import Category from './interfaces/Category'
import CategoryItem from './components/CategoryItem'

function App() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const testCategories: Category[] = [
      {
        id: 1,
        subCategories: [
          {
            id: 11,
            subCategories: []
          },
          {
            id: 12,
            subCategories: [
              {
                id: 121,
                subCategories: [
                  {
                    id: 1211,
                    subCategories: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
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
      <ul>
        {categories.map(category => <CategoryItem key={category.id} category={category} />)}
      </ul>
    </>
  )
}

export default App
