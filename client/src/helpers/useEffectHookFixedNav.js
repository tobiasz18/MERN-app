/*export const useHideOnScrolled = (useState, useEffect, from) => {
  const [hidden, setHidden] = useState(false);
  const [test, setTest] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHidden(top > from);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hidden;
};*/