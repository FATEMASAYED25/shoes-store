
import React,{useState, useEffect} from 'react'
import Products from './Products'
import axios from 'axios'

const Categories = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data)
    }).catch(err => {
      console.log("can't fetch data");
    })

  }, [])
 const[categoryName]= useState([{name:"women shoes"},{name:"men shoes"},{name:"child  shoes"}])
 
  return (
    <React.Fragment>
    {products.map(product =>
    <div className="bookshelf">
    <h2 className="bookshelf-title">{product.category}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          {products
            .filter((product) => product.category === categoryName)
            .map((product) => (
              <Products key={product.id}  product={product}/>
            ))}
        </li>
      </ol>
    </div>
  </div>
  )}
    </React.Fragment>
  )
}

export default Categories