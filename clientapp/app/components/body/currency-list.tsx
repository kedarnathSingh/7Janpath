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
                  let response = await fetch(`${process.env.basePath}/currencies/list`);
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  let data = await response.json();
                  setCurrency(data);
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          }
          fetchData();

    }, [])
    return(
        <div className="head-container-sec mb-5 w-100">
            <h2>Today's Buy & Sell rate</h2>  
        <table className="table custom-table-set">
						{/* <thead>
						  <tr>
							<th scope="col">Currency</th>
							<th scope="col">Buy</th>
							<th scope="col">Sell</th>
							
						  </tr>
						</thead> */}
						<tbody>
                        
                          
                          <tr>
                          <td>
                                <div className="td-list-header">Currency</div>
                                <div className="list-buy td-list-item">Buy</div>
                                <div className="list-sell td-list-item">Sell</div>
                            </td>
                          {
    currency.map((item: { id: number; name: string, symbol: string, rate: number, priority: number, buy_rate: number, sell_rate: number }) => (
						
							<td>
                                <div className="td-list-item">
                                 {item.name} {/*<small className="small">{item.symbol}</small> */}
                                </div>
                                <div className="td-list-item">
                                {item.buy_rate}
                                </div>
                                <div className="td-list-item">
                                {item.sell_rate}
                                </div>
                                {/* {item.name} <small className="small">{item.symbol}</small> */}
                                </td>
                        ))
                    }
							{/* <td>{item.buy_rate}</td>
							<td>{item.sell_rate}</td> */}
						  </tr>
                             
						  
						</tbody>
					  </table>

 
        </div>
    )
}