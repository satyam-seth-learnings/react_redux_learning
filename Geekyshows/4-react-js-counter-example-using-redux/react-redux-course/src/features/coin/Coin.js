import { useSelector } from "react-redux";

function Coin() {
    const coin = useSelector((state) => state.counter.count);

    return (
        <div>
            <span className="value">Coin: {coin}</span>
        </div>
    );
}

export default Coin