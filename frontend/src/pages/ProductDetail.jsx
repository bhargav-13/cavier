import { Camera } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import Navbar from "../components/home/Navbar.jsx";
import ProductShowcaseSection from "../components/home/ProductShowcaseSection.jsx";
import ProductStars from "../components/products/ProductStars.jsx";
import Cart from "../assets/home/cart.png";
import Heart from "../assets/home/heart.png";
import Profile from "../assets/product/profile.jpg";
import useCommerce from "../hooks/useCommerce.js";
import useProduct from "../hooks/useProduct.js";
import useProducts from "../hooks/useProducts.js";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading } = useProduct(id);
  const { products } = useProducts({ page: 1, pageSize: 50 });
  const { toggleWishlist, toggleCart, isInWishlist, isInCart, isProcessing } = useCommerce();

  if (!loading && !product) {
    return <Navigate to="/products" replace />;
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="bg-page pt-28 text-white">
          <div className="mx-auto max-w-6xl px-6 pb-24 text-center md:px-12">
            <p className="text-white/70">Loading product...</p>
          </div>
        </main>
      </>
    );
  }

  const similarItems = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="bg-page pt-28 text-white">
        <div className="mx-auto max-w-6xl px-6 pb-24 md:px-12 lg:px-15">
          <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <h1 className="text-xl leading-tight text-white md:text-3xl">
                {product.title}
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-lg">
                {product.description}
              </p>

              <ProductStars className="justify-start" />

              <p className="text-xl tracking-wide text-white">
                Code :- {product.code}
              </p>

              <div className="pt-20 lg:pt-24">
                <p className="text-xl tracking-[0.08em] text-white">
                  MRP :- ₹ {product.price}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => toggleCart(product.id)}
                    disabled={isProcessing(product.id)}
                    className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-white/80 px-3 py-3 text-sm text-white transition"
                  >
                    <img
                      src={Cart}
                      alt="cart"
                      className="h-4 w-4 object-contain"
                    />
                    {isInCart(product.id) ? "Remove from cart" : "Add to cart"}
                  </button>

                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    onClick={() => toggleWishlist(product.id)}
                    disabled={isProcessing(product.id)}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/80 text-white transition"
                  >
                    <img
                      src={Heart}
                      alt="heart"
                      className={`h-5 w-5 object-contain ${isInWishlist(product.id) ? "opacity-100" : "opacity-75"}`}
                    />
                  </button>

                  <Link
                    to="/cart"
                    aria-label="Open cart"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/80 text-white transition"
                  >
                    <img
                      src={Cart}
                      alt="cart"
                      className="h-5 w-5 object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <ul className="mt-8 space-y-6 text-lg leading-relaxed text-white/85">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <section className="pt-20">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white">
                <img
                  src={Profile}
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-3xl tracking-[0.04em] text-white">
                Yash Patel
              </p>
            </div>

            <div className="mt-8 border border-foreground p-5">
              <textarea
                rows="4"
                placeholder="Enter your opinion"
                className="w-full resize-none bg-transparent text-sm text-foreground outline-none placeholder:text-white/40"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
              >
                <Camera className="h-4 w-4" />
                Add a photo
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
              >
                Share your content
              </button>
            </div>
          </section>

          <section className="pt-20">
            <h2 className="text-xl text-white md:text-3xl">
              Similar items
            </h2>

            <ProductShowcaseSection
              items={similarItems}
              className="pt-6"
              containerClassName="max-w-none px-0 py-0"
              gridClassName="grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
              hideTitle
              hideCta
              emptyMessage="No similar products available."
              onToggleWishlist={toggleWishlist}
              onToggleCart={toggleCart}
              isInWishlist={isInWishlist}
              isInCart={isInCart}
              isProcessing={isProcessing}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
