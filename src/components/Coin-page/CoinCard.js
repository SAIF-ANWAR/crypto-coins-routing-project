import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    console.log(coin)
    // const navigate = useNavigate()
    // const handleClick = (){
    //     navigate("/coin-details")
    // }
    return (
        <div className='shadow-lg rounded-2xl w-[250px] p-2'>
            <Link to={`/coin-details/${coin.id}`} className='flex justify-between items-center'>
                <div className='flex-shrink-0'>
                    <img className='mx-auto object-cover rounded-full h-16 w-16' src={coin.image} alt="" />
                </div>
                <div className='flex flex-col justify-end'>
                    <h1><span>{coin.name}</span></h1>
                    <p><span>{coin.symbol}</span></p>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;