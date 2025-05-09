import { useSelector } from 'react-redux'

const CryptoTable = ({ filter }) => {
  let assets = useSelector(state => state.crypto)

  if (filter === 'gainers') {
    assets = [...assets].sort((a, b) => b.change24h - a.change24h).slice(0, 5)
  } else if (filter === 'losers') {
    assets = [...assets].sort((a, b) => a.change24h - b.change24h).slice(0, 5)
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Symbol</th>
            <th className="p-2">Price</th>
            <th className="p-2">1h %</th>
            <th className="p-2">24h %</th>
            <th className="p-2">7d %</th>
            <th className="p-2">Market Cap</th>
            <th className="p-2">24h Volume</th>
            <th className="p-2">Supply</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-300 dark:divide-gray-700">
          {assets.map((a, i) => (
            <tr key={a.id}>
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{a.name}</td>
              <td className="p-2">{a.symbol}</td>
              <td className="p-2">${a.price.toLocaleString()}</td>
              <td className={`p-2 ${a.change1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{a.change1h}%</td>
              <td className={`p-2 ${a.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{a.change24h}%</td>
              <td className={`p-2 ${a.change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>{a.change7d}%</td>
              <td className="p-2">${a.marketCap.toLocaleString()}</td>
              <td className="p-2">${a.volume24h.toLocaleString()}</td>
              <td className="p-2">{a.supply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable