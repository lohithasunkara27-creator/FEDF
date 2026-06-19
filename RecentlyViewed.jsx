import products from "../data/products";


function RecentlyViewed() {

  const ids =
    JSON.parse(
      localStorage.getItem("recentProducts")
    ) || [];


  const recentProducts =
    products.filter(
      p => ids.includes(p.id)
    );


  return (
    <div>

      <h2>
        Recently Viewed
      </h2>


      {recentProducts.map(product => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}

    </div>
  );
}


export default RecentlyViewed;