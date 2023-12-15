import { useState } from "react";

function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0,
    });
    const handleUpdateForm = (event) => {
        const changedKey = event.target.name;
        const newValue = event.target.value;
        setFormData((currentFormData) => {
            return {
                ...currentFormData,
                [changedKey]: newValue,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ product: "", quantity: 0 });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product name</label>
            <input
                type="text"
                name="product"
                id="product"
                value={formData.product}
                onChange={handleUpdateForm}
            />
            {(!formData.product || formData.product.length > 20) && (
                <span style={{ color: "red" }}>
                    Product name cannot be empty or > 20
                </span>
            )}

            <label htmlFor="quantity">Quantity</label>
            <input
                type="number"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleUpdateForm}
            />
            <button>Add product to cart</button>
        </form>
    );
}

export default ShoppingListForm;
