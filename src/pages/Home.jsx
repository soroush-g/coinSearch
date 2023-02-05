import React from 'react'
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import homeStore from '../stores/homeStore';

function Home() {
  const store = homeStore()

  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div>
      <Header/>
      <header className='home-search'>
        <div className='width'>
         <h2>Search for a coin</h2>
         <input type="text" value={store.query} onChange={store.setQuery} />
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width">
         <h2>Trending coins</h2>
          <div className="home-cryptos-list">
        {store.coins.map(coin => {
         return (
         <ListItem key={coin.id} coin={coin} />
        )
      })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home;