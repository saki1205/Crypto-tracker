import CryptoTable from './components/CryptoTable'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { simulateCryptoUpdates } from './features/crypto/cryptoSlice'

function App() {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState('dark')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(simulateCryptoUpdates())
    }, 1500)
    return () => clearInterval(interval)
  }, [dispatch])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">💹 Crypto Price Tracker</h1>
        <div className="flex gap-4">
          <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
            <option value="all">All</option>
            <option value="gainers">Top Gainers</option>
            <option value="losers">Top Losers</option>
          </select>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      <CryptoTable filter={filter} />
    </div>
  )
}

export default App