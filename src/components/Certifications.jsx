import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./css/Certifications.css";


export const Certifications = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
        image: '/PORTFOLIO/certifications/AWS Certified Cloud Practitioner certificate_page-0001.jpg',
        title: "AWS Certified Cloud Practitioner",
        subtitle: "Amazon Web Services",
        description: "Validated foundational knowledge of AWS Cloud and global infrastructure.",
        date: "August 2025",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(145deg, #F59E0B, #000)",
        url:"https://www.credly.com/badges/b7337cd9-e3ec-4096-9329-190c95edea88/public_url"
      },
    {
      image: "/PORTFOLIO/certifications/ORACLE SE-11 CERTIFICATE_page-0001.jpg",
      title: "Java SE-11 Developer",
      subtitle: "Oracle",
      borderColor: "#10B981",
     gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9A57BDF4F4BE9D9CA0A23514A7FBBC6C2E03AB763B06391E6B05CAAC3288EE1E",
    },
    {
      image: "/PORTFOLIO/certifications/medisetti-bala-chellarao-ba550455-9f36-493b-aeec-04d937356b13-certificate_page-0001.jpg",
      title: "Mongo DB Associate Developer",
      subtitle: "MongoDB",
      borderColor: "#F59E0B",
     gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://learn.mongodb.com/c/ulUEVZ82STuu7ATZNzVrEw",
    },
    /*{
      image: "",
      title: "Casey Park",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://kaggle.com/",
    },
    {
      image: "",
      title: "Sam Kim",
      subtitle: "Mobile Developer",
      handle: "@thesamkim",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://github.com/",
    },
    {
      image: "",
      title: "Tyler Rodriguez",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://aws.amazon.com/",
    },*/
  ];
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="certifications-section px-8 py-100">
    <h2 className="text-green-400 text-4xl font-bold text-center mb-10">
      CERTIFICATIONS
    </h2>
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        }
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: c.url ? "pointer" : "default",
            }
          }
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
    </section>
  );
};

export default Certifications;
