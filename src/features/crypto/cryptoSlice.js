import { createSlice } from '@reduxjs/toolkit'

const sampleData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 93759.48, change1h: 0.43, change24h: 0.93, change7d: 11.11, marketCap: 1861618902186, volume24h: 43874950947, supply: '19.85M BTC' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 1802.46, change1h: 0.60, change24h: 3.21, change7d: 13.68, marketCap: 217581279327, volume24h: 23547469307, supply: '120.71M ETH' },
  { id: 3, name: 'Tether', symbol: 'USDT', price: 1.00, change1h: 0.00, change24h: 0.00, change7d: 0.04, marketCap: 145320022085, volume24h: 92288882007, supply: '145.27B USDT' },
  { id: 4, name: 'XRP', symbol: 'XRP', price: 2.22, change1h: 0.46, change24h: 0.54, change7d: 6.18, marketCap: 130073814966, volume24h: 5131481491, supply: '58.39B XRP' },
  { id: 5, name: 'Solana', symbol: 'SOL', price: 151.51, change1h: 0.53, change24h: 1.26, change7d: 14.74, marketCap: 78381958631, volume24h: 4881674486, supply: '517.31M SOL' },
]

const getRandomDelta = () => parseFloat((Math.random() * 2 - 1).toFixed(2))

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    simulateCryptoUpdates: (state) => {
      return state.map(asset => ({
        ...asset,
        price: parseFloat((asset.price * (1 + getRandomDelta() / 100)).toFixed(2)),
        change1h: parseFloat((asset.change1h + getRandomDelta()).toFixed(2)),
        change24h: parseFloat((asset.change24h + getRandomDelta()).toFixed(2)),
        change7d: parseFloat((asset.change7d + getRandomDelta()).toFixed(2)),
        volume24h: asset.volume24h + Math.floor(Math.random() * 10000000),
      }))
    },
  },
})

export const { simulateCryptoUpdates } = cryptoSlice.actions
export default cryptoSlice.reducer