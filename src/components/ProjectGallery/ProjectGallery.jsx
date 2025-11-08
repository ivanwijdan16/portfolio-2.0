import { useState, useRef, useEffect } from "react";
import "./ProjectGallery.css";

export default function ProjectGallery({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const galleryRef = useRef(null);

  // Update arrow visibility based on scroll position
  const updateArrowVisibility = () => {
    if (!galleryRef.current) return;
    const container = galleryRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const container = galleryRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrowVisibility);
      updateArrowVisibility(); // Initial check
      return () => container.removeEventListener("scroll", updateArrowVisibility);
    }
  }, [items]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
    galleryRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (galleryRef.current) {
      galleryRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (galleryRef.current) {
        galleryRef.current.style.cursor = "grab";
      }
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !galleryRef.current) return;
    const x = e.touches[0].clientX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Arrow button handlers
  const scrollToDirection = (direction) => {
    if (!galleryRef.current) return;

    // Menentukan cardWidth dan gap berdasarkan lebar viewport
    const viewportWidth = window.innerWidth;
    let cardWidth, gap;

    if (viewportWidth <= 390) {
      cardWidth = 220;
      gap = 16; // 1rem
    } else if (viewportWidth <= 480) {
      cardWidth = 240;
      gap = 16; // 1rem
    } else if (viewportWidth <= 640) {
      cardWidth = 260;
      gap = 16; // 1rem
    } else if (viewportWidth <= 768) {
      cardWidth = 280;
      gap = 16; // 1rem
    } else if (viewportWidth <= 1024) {
      cardWidth = 360;
      gap = 24; // 1.5rem
    } else {
      cardWidth = 400;
      gap = 24; // 1.5rem
    }

    // Scroll 1 card at a time di mobile, 2 cards di desktop
    const scrollCards = viewportWidth <= 768 ? 1 : 2;
    const scrollAmount = (cardWidth + gap) * scrollCards;

    galleryRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-400">
        <p>Belum ada project untuk kategori ini</p>
      </div>
    );
  }

  return (
    <div className="project-gallery">
      <div className="gallery-wrapper">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button className="gallery-arrow gallery-arrow-left" onClick={() => scrollToDirection("left")} aria-label="Scroll Left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {/* Gallery Container */}
        <div
          className="gallery-container"
          ref={galleryRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div className="gallery-grid">
            {items.map((item, index) => (
              <div key={item.id} className={`gallery-card ${hoveredIndex === index ? "hovered" : ""}`} onMouseEnter={() => !isDragging && setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} style={{ pointerEvents: isDragging ? "none" : "auto" }}>
                <div className="card-inner">
                  <div className="card-image-wrapper">
                    <img src={item.image} alt={item.title} className="card-image" draggable="false" />
                    <div className="card-overlay"></div>
                  </div>

                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>

                    {item.tags && item.tags.length > 0 && (
                      <div className="card-tags">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button className="gallery-arrow gallery-arrow-right" onClick={() => scrollToDirection("right")} aria-label="Scroll Right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>

      {/* View All Designs Button */}
      <div className="gallery-footer">
        <a href="https://id.pinterest.com/ivanwijdan/design/" target="_blank" rel="noopener noreferrer" className="view-all-button">
          <span className="button-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </span>
          <span className="button-text">See All My Design Projects</span>
          <span className="button-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
