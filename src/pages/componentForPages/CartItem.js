const CartItem = props => {
    const {cart, addNumber, removeFromCart} = props;
    return ( 
        cart.map(item => (
            <div key={item.id} className="cartWrapper__item">
                <img src={item.img} alt="item" className="cartWrapper__photo"/>
                <div className="cartWrapper__textWrapper">
                        <p className="cartWrapper__name">{item.name}</p>
                        <p className="cartWrapper__price">${item.price}</p>
                        <input onChange={addNumber.bind(this, item)}
                        min='1'
                        max='6'
                        type="number"
                        className="cartWrapper__count"
                        value={item.qty}
                        />
                        <i 
                        onClick={() => removeFromCart(item.id)}  
                        className="fas fa-trash-alt cartWrapper__trash">
                        </i>
                </div>
            </div>
        )));
}
 
export default CartItem;