function renderCartItem(item) {
    const product = item;
    Item = {id: 10, title: "Суши", count: 3, price: 500};
    let itemCountText = "";
    itemCountText = itemCountText +product.count;
    itemCountText = itemCountText + ` × `;
    itemCountText = itemCountText + product.price;
    itemCountText = itemCountText + ` ₽ = `;
    let sum = product.count * product.price;
    itemCountText = itemCountText + sum;
    itemCountText = itemCountText + ` ₽`;
    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
