const CartWidget = ({aprender, handleOnClick}) => {
    return(
        <div style={{backgroundColor: '#eee'}} onClick={handleOnClick}>
            {aprender}
        </div>
    )
}

export default CartWidget;