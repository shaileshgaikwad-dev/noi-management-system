import { useState } from "react";

export function usePagination(itemsPerPage: number = 7) {
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentItems = <T>(items: T[]) => {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
      currentItems: items.slice(startIndex, endIndex),
      totalItems,
      totalPages,
      startIndex,
      endIndex,
      currentPage,
      goToPage: (page: number) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      },
    };
  };

  return { currentPage, setCurrentPage, getCurrentItems };
}
