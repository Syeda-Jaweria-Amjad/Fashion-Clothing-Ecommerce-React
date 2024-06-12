import React from 'react';
import p1 from '../../components/Images/p1.webp';
import sizechart from '../../components/Images/size_chart.webp';

const SingleProduct = () => {
  return (
    <div className="flex justify-center items-start mt-8 p-5">
      <div className="max-w-5xl flex flex-col md:flex-row">
        {/* Product Images */}
        <div className="w-full md:w-1/2 p-5">
          {/* Big Image */}
          <img
            src={p1}
            alt="Big Product"
            className="w-full h-auto rounded-xl"
          />
          {/* Small Images */}
          <div className="flex justify-between my-4 space-x-2">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={p1}
                alt={`Small Product ${idx + 1}`}
                className="w-1/5 h-auto cursor-pointer rounded-xl"
              />
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 p-5">
          <p>Envouge - Thread</p>
          <h1 className="text-3xl font-bold mb-4">TEXTURED POLO SHIRT | OLIVE</h1>

          <div className="star-div my-5 flex items-center">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  className={`w-4 h-4 ${idx < 4 ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-600'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">12 Reviews</span>
          </div>

          <div className="price my-5 flex space-x-4">
            <div className="old-price op">Rs.2,000</div>
            <div className="new-price np">Rs.1,500</div>
          </div>

          <div className="mb-4">
            <label htmlFor="sizes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size:</label>
            <select id="sizes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select Your Size:</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          <div className="quantity my-4">
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity:</label>
            <div className="flex items-center gap-4">
              <button className="group rounded-full border border-gray-200 shadow-sm p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none">
                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 9.5H13.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <input type="text" id="quantity" className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center" placeholder={2} />
              <button className="group rounded-full border border-gray-200 shadow-sm p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none">
                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 9.5H14.25M9 14.75V4.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <p className="text-gray-800 mb-4">
            Is Available In Size: SMALL | MEDIUM | LARGE
          </p>

          <button type="button" className="py-3.5 px-12 mb-2 text-lg font-medium text-white focus:outline-none bg-gray-900 rounded-full border border-gray-200 hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            ADD TO CART
          </button>

          <p className="text-gray-500 my-4 text-sm">
            THE NAME SAYS IT ALL, Full sleeve polo with a light thermal textured fabric of high quality which don’t make you feel the heat of the summer, and also provides a full sleeve formal and old money look. The right size slightly snugs the body leaving enough room for comfort in the sleeves and waist. A perfect shirt for your formal, old money and daily look, an allrounder
          </p>

          <div>
            <label htmlFor="sizechart" className="block my-2 text-md font-medium text-gray-900 dark:text-white">Size Chart:</label>
            <img src={sizechart} alt="Size Chart" className="my-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
