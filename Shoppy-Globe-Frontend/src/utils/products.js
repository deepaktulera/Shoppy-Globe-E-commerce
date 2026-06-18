export async function getProducts() {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();

    return data.products;
}

export async function getSingleProduct(id) {
    const response = await fetch(`http://localhost:5000/products/${id}`);

    const data = await response.json();
    return data;
}