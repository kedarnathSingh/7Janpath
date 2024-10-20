"use client"
import { useEffect, useState } from "react"

/**
 * Renders a list of currencies fetched from a dummy API.
 * 
 * This component fetches a list of products from the 'https://dummyjson.com/products' API and displays the title of each product in a list.
 */
export default function Currencylist(){

    const[currency, setCurrency] = useState([]);

    useEffect( () => {
          async function fetchData() {
              try {
                  let response = await fetch('https://dummyjson.com/products');
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  let data = await response.json();
                  setCurrency(data.products);
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          }
          fetchData();

    }, [])
    return(
        <div>
            <h1>Currency List</h1>
            
        <table className="table custom-table-set">
						<thead>
						  <tr>
							<th scope="col">Currency</th>
							<th scope="col">Buy</th>
							<th scope="col">Sell</th>
							<th scope="col">Our Rate</th>
						  </tr>
						</thead>
						<tbody>
                        {
    currency.map((item: { id: number; title: string }) => (
						  <tr>
							<td>{item.title}</td>
							<td>{item.id}</td>
							<td>{item.id}</td>
							<td>{item.id}</td>
						  </tr>
                             ))
}
						  
						</tbody>
					  </table>

 
        </div>
    )
}