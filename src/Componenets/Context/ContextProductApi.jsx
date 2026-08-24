import { createContext, useContext } from 'react';
import { useSearchParams } from 'react-router';
import { useProducts } from '../PRODUCTS PAGE/hooks/useProducts';

let ContextProduct = createContext();

export function ProviderContext({ children }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('category');

  const { products, isLoading, error } = useProducts(activeCategory);
  function handleCategoryChange(category) {

    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  }
  return (
    <ContextProduct.Provider
      value={{ activeCategory, isLoading, products, error, handleCategoryChange }}
    >
      {children}
    </ContextProduct.Provider>
  );
}
export function useProductsContext() {
  const context = useContext(ContextProduct);

  if (!context) {
    throw new Error('useProductsContext باید داخل ProviderContext استفاده بشه');
  }

  return context;
}
