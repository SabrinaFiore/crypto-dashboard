import { Link } from "react-router-dom";

export default function CoinList() {
	const cryptoList = ['bitcoin', 'ethereum', 'ripple'];

	return (
		<>
			{
				cryptoList.map((crypto) => {
					return <>
						<Link 
							to={`/coin/detail/${crypto}`}
							key={crypto}
							className="py-10 px-20 my-5 bg-blue-300 text-gray-700 rounded-lg block w-full">
							{crypto}
						</Link>
					</>
				})
			}
		</>
	)
}