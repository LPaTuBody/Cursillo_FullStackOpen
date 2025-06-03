const Notification = ({ message, prct, color }) => {
    let notiStyle = {}
    let barraStyle = { width: prct }

    color 
    ? notiStyle = { backgroundColor: 'rgb(176, 220, 218)' }
    : notiStyle = { backgroundColor: 'rgb(244, 178, 102)' }

    color 
    ? barraStyle = {...barraStyle, backgroundColor: 'rgb(83, 151, 147)'} 
    : barraStyle = {...barraStyle, backgroundColor: 'rgb(229, 139, 36)'}

    message === null 
    ? notiStyle = { ...notiStyle, opacity: '0', margin: '10px 30px' } 
    : notiStyle = { ...notiStyle, opacity: '1', margin: '30px' }

    return(
    <div className='notiBox' style={ notiStyle }>
        <p>{ message }</p>
        <div className='barra' style={barraStyle}></div>
    </div>
    )
}

export default Notification