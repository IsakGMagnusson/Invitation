import { useState } from "react";

function useSelectedPage(initialPage: number = 0) {
  const [page, setPage] = useState(initialPage);

  const selectedWelcome = () => {
    setPage(0);
  };

  const selectedInfo = () => {
    setPage(1);
  };

  return {
    page,
    selectedWelcome,
    selectedInfo,
  };
}

export default useSelectedPage;
