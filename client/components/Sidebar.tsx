import { useState, useEffect } from "react";
import { fetchCategories } from "../apis/productApi";

function Sidebar() {
  const [categories, setCategories]= useState<string []>([])
  useEffect(() => {
    const getCategories = async () => {
      const data= await fetchCategories()
      setCategories(data)
    }
    getCategories()
  }, []);
  
  return(
    <aside>
      <h3> Shop by Departments</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}> {category} </li>
        ))}
      </ul>
    </aside>

  )

  }
export default Sidebar