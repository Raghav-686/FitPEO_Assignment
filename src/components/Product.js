import abstract from ".././assets/abstract.png";
import sarphens from ".././assets/sarphens.png"

const data = [
  {
    head: "Abstract 3D",
    stock: 32,
    price: 45.99,
    "total-Sales": 20,
    sent: "lorem iphudjej jcrshhnc collecting the data random word",
    img: abstract,
  },
  {
    head: "Sharphens illustration",
    stock: 32,
    price: 45.99,
    "total-Sales": 20,
    sent: "lorem iphudjej jcrshhnc collecting the data random word",
    img : sarphens
  },
];


const Product = () => {
  return (
    <div className="product-container bg-white rounded-md p-5 box-shadow mt-6">
      <div className="inner">
        <div className="flex mb-8">
          <h3 className=" w-3/4">Product Shell</h3>
          <div className="pr-3">
            <input
              className=" border-none p-1 pl-3 rounded text-gray-600"
              placeholder="Search"
            ></input>
          </div>
          <div>
            <select className="border-none p-1 text-gray-600">
              <option value="Last 30 Days">Last 30 Days</option>
            </select>
          </div>
        </div>
        <div className="data-container">
          <div
            className="flex mb-4 pb-3 font-bold"
            style={{ "border-bottom": "1px solid #D5D5D5", color: "#D5D5D5" }}
          >
            <p className="w-3/4">Product Name</p>
            <p className="w-1/12">Stock</p>
            <p className="w-1/12">Price</p>
            <p className="w-1/12">Total Sales</p>
          </div>
          <div >
            {data.map((object) => {
              return (
                <div className="flex pb-4">
                  <div className="flex w-3/4">
                    <div style={{ width: "10%" }}>
                      <img
                        className="w-full rounded-lg"
                        src={object?.img}
                        alt=""
                      />
                    </div>
                    <div className="pl-4 pt-2">
                      <div className="font-bold">{object?.head}</div>
                      <div className="text-sm" style={{ color: "#D5D5D5" }}>
                        {object.sent}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/12 pt-4">
                    <p
                      style={{
                        "font-size": "13px",
                        "font-weight": "bold",
                        color: "rgb(157 152 153)",
                      }}
                    >
                      {object?.stock} in stock
                    </p>
                  </div>
                  <div className="w-1/12 pt-4">
                    <p className=" font-bold">${object?.price}</p>
                  </div>
                  <div className="w-1/12 pt-4 text-center">
                    <p className="font-bold" style={{ color: "#0000008a" }}>
                      {object?.["total-Sales"]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
