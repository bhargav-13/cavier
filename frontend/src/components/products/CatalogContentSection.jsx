import { ChevronDown, Download, SlidersHorizontal } from "lucide-react";
import ProductShowcaseSection from "../home/ProductShowcaseSection.jsx";
import Button from "../utils/Button.jsx";
import { useState } from "react";
import { useMemo } from "react";

const CATALOG_THEME_LABEL = "Single Lever | Quarter Turn | Fully Brass";

const ProductContentSection = ({
  items = [],
  loading = false,
  onToggleWishlist,
  onToggleCart,
  isInWishlist,
  isInCart,
  isProcessing,
  filters,
  onFilterChange,
  filterOptions,
  pagination,
  onPageChange,
}) => {
  const [openFilter, setOpenFilter] = useState(null);
  const totalPages = pagination?.totalPages || 1;
  const page = pagination?.page || 1;

  const priceOptions = useMemo(
    () => [
      { label: "All Prices", value: "" },
      { label: "Below INR 1900", value: "0-1900" },
      { label: "INR 1900 - 2100", value: "1900-2100" },
      { label: "Above INR 2100", value: "2100-999999" },
    ],
    []
  );

  const selectedPriceLabel = (() => {
    if (!filters?.minPrice && !filters?.maxPrice) return "Price";
    const encoded = `${filters.minPrice || ""}-${filters.maxPrice || ""}`;
    const match = priceOptions.find((item) => item.value === encoded);
    return match?.label || "Price";
  })();

  const filterItems = [
    {
      key: "price",
      label: selectedPriceLabel,
      options: priceOptions,
      onSelect: (value) => {
        if (!value) {
          onFilterChange?.("minPrice", "");
          onFilterChange?.("maxPrice", "");
          return;
        }
        const [min, max] = value.split("-");
        onFilterChange?.("minPrice", min);
        onFilterChange?.("maxPrice", max);
      },
    },
    {
      key: "area",
      label: filters?.area || "Area",
      options: ["", ...(filterOptions?.area || [])].map((v) => ({
        label: v || "All",
        value: v,
      })),
      onSelect: (value) => onFilterChange?.("area", value),
    },
    {
      key: "finish",
      label: filters?.finish || "Color Finishes",
      options: ["", ...(filterOptions?.finish || [])].map((v) => ({
        label: v || "All",
        value: v,
      })),
      onSelect: (value) => onFilterChange?.("finish", value),
    },
    {
      key: "category",
      label: filters?.category || "Category",
      options: ["", ...(filterOptions?.category || [])].map((v) => ({
        label: v || "All",
        value: v,
      })),
      onSelect: (value) => onFilterChange?.("category", value),
    },
    {
      key: "shape",
      label: filters?.shape || "Shape",
      options: ["", ...(filterOptions?.shape || [])].map((v) => ({
        label: v || "All",
        value: v,
      })),
      onSelect: (value) => onFilterChange?.("shape", value),
    },
  ];

  return (
    <section className="py-10 md:py-20">
      {/* FILTERS CONTAINER */}
      <div className="mx-auto max-w-6xl px-0 md:px-10 lg:px-10">
        
        {/* Top Bar */}
        <div className="flex flex-col gap-5 border-b border-white/20 pb-6 text-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-lg">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </div>

          <div className="text-center text-lg text-white/90">Themes</div>

          <div className="text-xs text-white/70 md:text-right">
            {CATALOG_THEME_LABEL}
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="flex items-center justify-between border-b border-white/10 py-5 text-sm text-white/90">
          {filterItems.map((item, index) => (
            <div
              key={item.key}
              className={`relative ${
                index === 0
                  ? "text-left"
                  : index === filterItems.length - 1
                  ? "text-right"
                  : "text-center"
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenFilter((prev) =>
                    prev === item.key ? null : item.key
                  )
                }
                className="flex items-center gap-2 transition hover:text-white"
              >
                <span>{item.label}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* DROPDOWN */}
              {openFilter === item.key && (
                <div
                  className={`absolute top-full z-20 mt-2 min-w-[220px] border border-white/20 bg-page p-1 shadow-lg ${
                    index === filterItems.length - 1 ? "right-0" : "left-0"
                  }`}
                >
                  {item.options.map((option) => (
                    <button
                      key={`${item.key}-${option.label}`}
                      type="button"
                      onClick={() => {
                        item.onSelect(option.value);
                        setOpenFilter(null);
                      }}
                      className="block w-full px-3 py-2 text-left text-sm text-white/90 transition hover:bg-white/10"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <ProductShowcaseSection
          items={items}
          className="pt-10"
          containerClassName="max-w-none px-0 py-0"
          gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14"
          hideTitle
          hideCta
          emptyMessage={
            loading ? "Loading products..." : "No products available yet."
          }
          onToggleWishlist={onToggleWishlist}
          onToggleCart={onToggleCart}
          isInWishlist={isInWishlist}
          isInCart={isInCart}
          isProcessing={isProcessing}
        />
      </div>

      {/* PAGINATION */}
      <div className="pt-10 text-center">
        <p className="text-xs text-foreground">
          Page {page} of {totalPages}
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => onPageChange?.(pageNumber)}
                className={`inline-flex h-9 min-w-9 items-center justify-center border px-3 transition hover:border-white ${
                  pageNumber === page
                    ? "border-white text-white"
                    : "border-white/30 text-foreground"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mx-auto mt-20 max-w-6xl px-6 md:px-12 lg:px-20 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl text-foreground md:text-2xl">
          Explore The Catalog
        </h2>

        <Button text="Download" icon={<Download />} />
      </div>
    </section>
  );
};

export default ProductContentSection;
