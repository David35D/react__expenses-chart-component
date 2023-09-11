import balanceLogo from '../../assets/logo.svg';
import './Balance.css';

const Balance = () => {
    return (
        <div className='balance'>
            <div className='balance-content'>
                <p>My balance</p>
                <p className='balance-amount'>$921.48</p>
            </div>
            <div className='balance-logo'>
                <img src={balanceLogo} alt='App made by David' />
            </div>
        </div>
    );
};

export default Balance;