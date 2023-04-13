import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
           <div className='nav__brand'>
                <img src={logo} alt="Logo" />
            </div>
            
            <ul className='nav__links'>
                <li><a href="#">Comprar</a></li>
                <li><a href="#">Rentar</a></li>
                <li><a href="#">Vender</a></li>
                <li><a href="#">Lotus Web3</a></li>
            </ul>

           

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect Wallet
                </button>
            )}
        </nav>
    );
}

export default Navigation;
