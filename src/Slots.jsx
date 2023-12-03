export default function Slots({ val1, val2, val3 }) {
    const isWin = val1 === val2 && val1 === val3;
    return (
        <>
            <h1>{val1} {val2} {val3}</h1>
            { isWin ? 
                <h2 style={{color: 'green'}}>You win!</h2> :
                <h2 style={{color: 'red'}}>You lose :c</h2>
            }
            {isWin &&
                <h3>Congrats !!!!!</h3>
            }
        </>
    )
}