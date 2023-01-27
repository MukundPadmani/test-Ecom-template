import React from 'react'
import ClothButtonEffect from './components/ClothButtonEffect';
import ClothSizeEffect from './components/ClothSizeEffect';
import LikeButton from './components/LikeButton';
import ProductCardSmallImage from './components/ProductCardSmallImage';
import ProductCradColors from './components/ProductCradColors';
import ProductImage from './components/ProductImage';
import ProductPriceButton from './components/ProductPriceButton';
import ProductReview from './components/ProductReview';

const ProductCard = ({ products }) => {
    
    return (
        <div>
            <div className="container space-y-24 my-24 lg:space-y-32 lg:my-32">
                <div>
                    <div className="flow-root">
                        <div>
                            <div className="bg-white">
                                <div className="mx-auto  max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    {products.map((product, index) => (
                                        <>
                                         <div>
                                            <div key={product.id} className="group relative">
                                                <div className="flex flex-col bg-transparent">
                                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                                            <ProductImage 
                                                                image={product.imageSrc} 
                                                                alt={product.imageAlt}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                            />

                                                            {/* like button */}
                                                                <LikeButton />

                                                            {/* products hover effext to show xs,s,m,l */}
                                                            {product.type === "cloth" && (
                                                                <ClothSizeEffect clothSize={product} />
                                                            )}

                                                            {/* products hover effext to show add to bag and quickview */}
                                                            {product.type === "other" && (
                                                                <ClothButtonEffect buttonEffect={product} />
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4 px-2.5 pt-5 pb-2.5">
                                                {product.type === "cloth" && (
                                                    <ProductCardSmallImage product={product} />
                                                )}

                                                {product.type === "other" && (
                                                    <ProductCradColors product={product} />
                                                )}
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h2 className="text-gray-700 text-base font-semibold">
                                                        <span>
                                                            {product.name}
                                                        </span>
                                                    </h2>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
                                                        {product.subname}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end mt-4">
                                                {/* price button */}
                                                    <ProductPriceButton price={product.price} />

                                                {/* products reviews */}
                                                    <ProductReview />
                                            </div>
                                        </div>
                                        </>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard