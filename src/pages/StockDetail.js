import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function StockDetail(props) {

    const apiKey = '6a946a0631e672c7352022d15c048f7e';
    const params = useParams();

    const symbol = params.symbol;

    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`

    const [data, setData] = useState([])

    const getData = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch(e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {
                    data.map((item) => {
                        return (
                            <>
                                <h1>This is the Stock Details for {item.name}</h1>
                                <ul>
                                    <li>Symbol: {item.symbol}</li>
                                    <li>Name: {item.name}</li>
                                    <li>Price: {item.price}</li>
                                    <li>Percentage Change: {item.changesPercentage}</li>
                                    <li>Change: {item.change}</li>
                                    <li>Day Low: {item.dayLow}</li>
                                    <li>Day High: {item.dayHigh}</li>
                                    <li>Year High: {item.yearHigh}</li>
                                    <li>Year Low: {item.yearLow}</li>
                                    <li>Market Cap: {item.marketCap}</li>
                                    <li>Price Avg 50: {item.priceAvg50}</li>
                                    <li>Price Avg 200: {item.priceAvg200}</li>
                                    <li>Volume: {item.volume}</li>
                                    <li>Avg Volume: {item.avgVolume}</li>
                                    <li>Exchange: {item.exchange}</li>
                                    <li>Open: {item.open}</li>
                                    <li>Previous Close: {item.previousClose}</li>
                                    <li>EPS: {item.eps}</li>
                                    <li>PE: {item.pe}</li>
                                </ul>
                            </>
                        )
                    })
                }
        </div>
    )
}