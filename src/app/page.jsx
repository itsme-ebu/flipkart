import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import products from "@/contents/product";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full h-40 lg:h-96 relative">
        <Image
          src="https://rukminim2.flixcart.com/fk-p-flap/1000/440/image/359abfe613a3d499.jpg?q=20"
          fill
        />
      </div>

      <div className="flex flex-wrap items-center text-black lg:gap-5 lg:justify-center">
        {products.map((prod) => (
          <Product
            key={prod.id}
            thumbnail={prod.thumbnail}
            name={prod.name}
            price={prod.price}
            reviews={prod.reviews}
            old_price={prod.old_price}
            brand={prod.brand}
            id={prod.id}
          />
        ))}
      </div>
      <footer className="w-full h-full text-center text-3xl py-5 bg-black text-white">
        scam korbo
      </footer>
    </main>
  );
}
