import { useEffect, useState } from "react";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"scroll-top" + (visible ? " active" : "")} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
}
