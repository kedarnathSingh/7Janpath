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
        <div className="head-container-sec container-fluid">
            <h2>Today's Buy & Sell rate</h2> 
            <div className="row">
              <div className="col-lg-12 mt-3">  
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
                            
                          {currency && currency.map((item: { id: number; name: string, symbol: string, rate: number, priority: number, buy_rate: number, sell_rate: number }) => (
							<td key={item.id}>
                                <div className="td-list-item td-list-head">
                                 {item.name}
                                </div>
                                <div className="td-list-item">
                                {item.buy_rate}
                                </div>
                                <div className="td-list-item">
                                {item.sell_rate}
                                </div>
                            </td>
                        ))}
						  </tr>
						</tbody>
					  </table>
            </div>
              </div>
        </div>
    )
}