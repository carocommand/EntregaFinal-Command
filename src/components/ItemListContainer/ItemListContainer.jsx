const ItemListContainer = ({greeting}) => {
    const greetingStyles = {
        fontSize: '3rem',
        fontWeight: '600',
        textAlign: 'center',
        color: '#8b4513',
    }

    return (
    <div style={greetingStyles} >
        {greeting}
    </div>
    )
}

export default ItemListContainer;