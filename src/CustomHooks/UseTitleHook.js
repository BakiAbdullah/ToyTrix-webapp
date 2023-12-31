import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `ToyTrix | ${title}`;
  }, [title]);
};

export default useTitle;
