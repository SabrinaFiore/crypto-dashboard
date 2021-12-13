import { Link, useParams } from "react-router-dom";

export default function CoinDetail() {
	const {coin} = useParams();
	console.log(coin);

	return (
		<>
			<div className="w-full">
				<Link to="/" className="text-white text-2xl">Torna Indietro</Link>
			</div>
			<h1 className="text-8x1 text-blue-300">{coin}</h1>
		</>
	)
}