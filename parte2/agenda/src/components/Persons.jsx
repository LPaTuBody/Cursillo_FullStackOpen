const Persons = ({ filtro, delNum }) => (
    <div className='numbersBox boxes'>
        <h2>Numbers</h2>
        {filtro.map(p =>
        <div key={p.id}>
            <p>{p.name} {p.number}</p>
            <button onClick={() => delNum(p.id)}>delete</button>
        </div> 
        )}
    </div>
)

export default Persons