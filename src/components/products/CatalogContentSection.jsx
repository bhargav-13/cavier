import { ChevronDown, Download, SlidersHorizontal } from "lucide-react";

import {
  catalogProducts,
  productFilters,
  catalogThemeLabel,
} from "../../data/productCatalog.js";
import ProductShowcaseSection from "../home/ProductShowcaseSection.jsx";
import Button from "../utils/Button.jsx";

const ProductContentSection = () => {
  return (
    <section className="py-20">
      {/* 🔹 FILTERS CONTAINER (WIDER) */}
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        {/* Top Bar */}
        <div className="flex flex-col gap-5 border-b border-white/20 pb-6 text-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-lg">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </div>

          <div className="text-center text-lg text-white/90">Themes</div>

          <div className="text-sm text-white/70 md:text-right">
            {catalogThemeLabel}
          </div>
        </div>

        {/* Filters */}
        <div className="grid gap-4 border-b border-white/10 py-5 text-sm text-white/90 sm:grid-cols-2 lg:grid-cols-5">
          {productFilters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              className="flex items-center border-b border-white/10 pb-3 text-left transition hover:text-white lg:border-b-0 lg:pb-0"
            >
              <span className="pe-2">{filter.label}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 PRODUCTS CONTAINER (NARROWER - MATCHES IMAGE) */}
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <ProductShowcaseSection
          items={catalogProducts}
          className="pt-10"
          containerClassName="max-w-none px-0 py-0 md:px-0"
          gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14"
          hideTitle
          hideCta
        />
      </div>

      {/* Pagination */}
      <div className="pt-10 text-center">
        <p className="text-xs  text-foreground">Page 1 of 6</p>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          {["1", "2"].map((label) => (
            <button
              key={label}
              className="inline-flex h-9 min-w-9 items-center justify-center border border-white/30 px-3 text-foreground transition hover:border-white"
            >
              {label}
            </button>
          ))}
          <span>... </span>
          <button className="inline-flex h-9 min-w-9 items-center justify-center border border-white/30 px-3 text-white transition hover:border-white">
            &gt;
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-20 max-w-6xl px-6 md:px-12 lg:px-20 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl  text-foreground md:text-2xl">
          Explore The Catalog
        </h2>

        <Button text="Download" icon={<Download />} />
      </div>
    </section>
  );
};

export default ProductContentSection;
