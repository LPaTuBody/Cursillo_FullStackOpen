const Filter = ({ handleFilter }) => (
  <div className='filterBox boxes'>
    Filter shown with 
    <input onChange={handleFilter} />
  </div>
)

export default Filter