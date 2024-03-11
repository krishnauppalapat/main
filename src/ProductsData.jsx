import React, { useEffect } from 'react'
import axios from 'axios';


const ProductsData = () => {
  const [pro,setPro]=React.useState([])
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
        setPro([...pro,res.data.products])
    }).catch((error)=>{
      console.log('errors fetching data',error)
    })
  },[]);

  // useEffect((
  //   axios.get("https://dummyjson.com/products").then((res)=>{
  //       setPro([...pro,res.data.products])
  //   })
  // ),[ProductsData])  
  console.log(pro)             
  return (
    <div>
        {
          pro.length>0?
          <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
          <tbody>
            {
          pro.map((product,i)=>{
            return(
              <tr key={i}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            </tr>
            )
           
          })
            }
            </tbody>
        </table>
      :<p>Loading...</p>
        }
    </div>
  )
}

export default ProductsData;
