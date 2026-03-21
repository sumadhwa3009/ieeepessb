import { useEffect, useState } from "react";
import styles from "../styles/Gallery.module.css";

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleNext = () => {
        setIsZoomed(false);
        setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    };

    const handlePrev = () => {
        setIsZoomed(false);
        setCurrentIndex((prev) =>
            prev === 0 ? filteredImages.length - 1 : prev - 1
        );
    };

    let touchStartX = 0;

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;

        if (touchStartX - touchEndX > 50) {
            handleNext();
        }

        if (touchEndX - touchStartX > 50) {
            handlePrev();
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/gallery")
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (currentIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [currentIndex]);

    // Extract categories from folder
    const categories = [
        "All",
        ...new Set(
            images
                .map((img) => {
                    const parts = img.asset_folder?.split("/");
                    return parts?.[1] || "uncategorized";
                })
                .filter((cat) => cat !== "uncategorized")
        ),
    ];

    const filteredImages =
        activeCategory === "All"
            ? images
            : images.filter((img) => {
                const parts = img.asset_folder?.split("/");
                return parts?.[1] === activeCategory;
            });

    return (
        <main>
            <section className="hero small-hero">
                <h1>Gallery</h1>
                <p>Moments captured from our events</p>
            </section>

            <section className={styles.section}>

                {/* Filters */}
                <div className={styles.filters}>
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveCategory(cat)}
                            className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""
                                }`}
                        >
                            {(cat || "unknown").replace(/-/g, " ")
                                .replace(/\b\w/g, c => c.toUpperCase())}
                        </button>
                    ))}
                </div>

                <div className={styles.instructionsBox}>
                    <p className={styles.instructions}>
                        Click on any image to preview. Tap again to zoom and explore details. Tap outside the image to exit preview.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {filteredImages.map((img, i) => (
                        <div
                            key={i}
                            className={styles.card}
                            onClick={() => setCurrentIndex(i)}
                        >
                            <img
                                loading="lazy"
                                src={`https://res.cloudinary.com/pes-ieee-bmsit/image/upload/f_jpg,q_auto,w_800/${img.public_id}`}
                                alt="gallery"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {currentIndex !== null && (
                <div
                    className={styles.lightbox}
                    onClick={() => setCurrentIndex(null)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >

                    {/* LEFT */}
                    {currentIndex > 0 && (
                        <button
                            className={`${styles.navBtn} ${styles.left}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsZoomed(false);
                                handlePrev();
                            }}
                        >
                            ❮
                        </button>
                    )}

                    {/* IMAGE */}
                    <img
                        src={`https://res.cloudinary.com/pes-ieee-bmsit/image/upload/f_auto,q_auto,w_1200/${filteredImages[currentIndex].public_id}`}
                        className={`${styles.zoomImage} ${isZoomed ? styles.zoomed : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(!isZoomed);
                        }}
                    />

                    {/* RIGHT */}
                    {currentIndex < filteredImages.length - 1 && (
                        <button
                            className={`${styles.navBtn} ${styles.right}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsZoomed(false);
                                handleNext();
                            }}
                        >
                            ❯
                        </button>
                    )}

                </div>
            )}
        </main>
    );
}