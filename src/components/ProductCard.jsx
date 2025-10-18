function ProductCard({id,name,price,image}) {
  return (
    <>

        <div className="bg-white shadow-lg p-4">
            <div className="w-full h-50">
                <img src={image} alt={name} className="w-full h-full object-contain"/>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h2>{name}</h2>
                    <p>${price}</p>
                </div>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-500">Add to Cart</button>
            </div>
        </div>
    
    </>
  )
}

export default ProductCard