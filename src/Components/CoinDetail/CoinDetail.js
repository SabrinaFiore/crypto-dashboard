import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function CoinDetail() {
	const {coin} = useParams();
	
	useEffect(() => {
		fetch('https://api.coingecko.com/api/v3/coins/markets' + 
			new URLSearchParams({
				vs_currency: 'eur',
				ids: 'coin'
			})
		)
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
	})

	return (
		<>
			<div className="w-full">
				<Link to="/" className="text-white text-2xl">Torna Indietro</Link>
			</div>
			<h1 className="text-8x1 text-blue-300">{coin}</h1>
		</>
	)
}