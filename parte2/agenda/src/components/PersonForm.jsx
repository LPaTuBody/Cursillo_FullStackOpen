const PersonForm = ({ addNum }) => (
  <div className='formBox boxes'>
    <h2>Add a new</h2>
    <form onSubmit={addNum}>
      <div>Name:<input /></div>
      <div>Number:<input /></div>
      <div><button type="submit">add</button></div>
    </form>
  </div>
)

export default PersonForm