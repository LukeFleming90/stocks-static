import { Link } from "react-router-dom";
import stocks from "../data";

export default function Stocks(props) {
    return (
        <div className="container">
            <h2>MOST ACTIVE STOCKS</h2>
            <p>(Click on Each Company Name for more Detail)</p>
            <table style={{width: "80%"}}>
                <tr>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr>
                {
                    stocks.map((item) => {
                        return (
                            <tr>
                                <td><Link className="link-style" to={`/stocks/${item.symbol}`}>{`${item.name} - ${item.symbol}`}</Link></td>
                                <td>{item.lastPrice}</td>
                                <td style={{color: (item.change > 0) ? 'green': 'red'}}>{item.change}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}