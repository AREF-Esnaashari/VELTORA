import { useState, useEffect } from 'react';

// TODO: این آدرس رو با آدرس واقعی Worker جایگزین کن
// مثال: https://veltora-api.its-esi2009.workers.dev/products
const API_BASE_URL = 'https://my-food-api.its-esi2009.workers.dev';

export function useProducts(category) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      setIsLoading(true);
      setError(null);

      try {
        const query = category ? `?category=${category}` : '';

        const res = await fetch(`${API_BASE_URL}/products${query}`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error('خطا در دریافت محصولات');
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [category]);

  return { products, isLoading, error };
}
