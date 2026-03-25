
//========= Types ===========
type Product = {
    id: number,
    title: string,
    price: number,
}

type CartItem = {
    item: Product,
    quantity: number
}

type CartItemState = {
    items: CartItem[],
    total: number,
    loading: boolean,
    error: string | null
}

type CartContextType = {
    state: CartItemState,
    addToCart: (item: Product) => void,
    removeFromCart: (productId: number) => void,
    updateQuantity: (productId: number,qty: number) => void,
    clearCart: () => void,
}

// ======== Initial State ===========

const initialCartState : CartItemState = {
    items: [],
    total: 0,
    loading: false,
    error: null,
}

// ======== Reducer ===========

function cartReducer(state: CartItemState,action: any): CartItemState {
    switch (action.type){

        case "ADD_TO_CART":
            const existingItem = state.items.find((item) => item.item.id === action.payload.id)

            let updatedItems;

            if (existingItem){
                updatedItems = state.items.map((item) => item.item.id === action.payload.id ? {...item,quantity: item.quantity+1} : item
            );
        }else{
            updatedItems = [
                ...state.items,
                {...action.payload,quantity: 1}
            ]
        }

        const updatedTotal = updatedItems.reduce((sum,item)=> sum + item.price * item.quantity,0)

        return {
            ...state,
            items: updatedItems,
            total: updatedTotal,
            loading: false,
            error: null
        }
        
        default:
            return state;
        
    }
}