import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)
    const [busqueda, setBusqueda]= useState("")
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}`)
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })
    }, [])

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const productosFiltrados = productos.filter((producto)=> producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const handleAddToCart = (product) => {

        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {

            setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: product.cantidad } : item));
        } else {
            toast.success(`El producto ${product.nombre} se ha agregado al carrito`)
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        toast.error(`El producto ${product.nombre} se ha eliminado al carrito`)
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    } else {
                        return null; // Si quantity es 1, marcamos para eliminar
                    }
                } else {
                    return item; // Si no es el producto, lo dejamos igual
                }
            }).filter(item => item !== null); // Quitamos los productos nulos
        });
    };

    const clearCart =()=>{
        setCart([])
        localStorage.removeItem("cart")
        toast.info('Compra finalizada!')
    }

    return (
        <CartContext.Provider 
        value={
            { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated,setIsAuth, productosFiltrados, busqueda, setBusqueda, clearCart }
        }>
            {children}
        </CartContext.Provider>
    )
}