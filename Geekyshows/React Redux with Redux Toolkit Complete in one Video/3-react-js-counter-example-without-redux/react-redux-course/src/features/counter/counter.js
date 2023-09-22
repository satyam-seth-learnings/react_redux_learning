function Counter(props) {

    return (
        <div>
            <button className="button" aria-label="Increment value" onClick={props.incrementCount}> + </button>

            <span className="value">Counter Count: {props.count}</span>

            <button className="button" aria-label="Decrement value" onClick={props.decrementCount}> - </button>
        </div>
    )
}

export default Counter;