import React, { useEffect, useState } from 'react';
import CoinCard from '../Coin-page/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

        fetch(url)
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl pt-10  font-bold text-gray-500'>Available Crypto Currencies</h1>
            <h2 className='text-xl pt-5 text-gray-500'>Total Coins: {coins.length}</h2>
            <div className='grid grid-cols-4 gap-4 justify-items-center'>
                {
                    coins.map(coin => < CoinCard key={coin.id} coin={coin} ></CoinCard>)

                }
            </div>
        </div >
    );
};

export default Coins;