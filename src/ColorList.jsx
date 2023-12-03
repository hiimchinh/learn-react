export default function ColorList({ colors }) {
    return (
        <div>
            <p>Color list</p>
            {colors.map((c) => {
                return <li style={{color: c}}>{c}</li>
            })}
        </div>
    )
}