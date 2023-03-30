import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface ImageCarouselProps {
    images: string[];
    texts: string[];
    stexts: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, texts, stexts }) => {
    if (images.length !== texts.length) {
        throw new Error('ImageCarousel requires the same number of images and texts.');
    }
    const imgStyle: CSSProperties = { objectFit: "cover", width: "100%", maxHeight: "700px" };
    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollToClassesList = () => {
        const missionclassbreak = document.getElementById("missionclassbreak");
        if (missionclassbreak) {
            missionclassbreak.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderButtons = (index: number) => {
        if (index === 0) {
            return (
                <button className="btn btn-primary" onClick={scrollToClassesList} style={{marginTop:"1rem"}}>See Classes</button>
            );
        } else if (index === 1) {
            return (
                <>
                    <Link to="/CreateAccount">
                        <button type="button" className="btn btn-primary me-3" style={{marginTop:"1rem"}}>Join Today</button>
                    </Link>
                </>
            );
        }
        return null;
    };

    return (
        <div ref={carouselRef} id="carouselExample" className="carousel slide image-carousel" data-bs-ride="carousel" data-bs-interval="7000">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div style={{ position: 'relative', display: 'inline-block', width:'100%' }}>
                            <img src={image} className="d-block w-100" alt={`slide-${index}`} style={imgStyle} />
                            <div
                                style={{
                                    content: "",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))",
                                    pointerEvents: "none",
                                }}
                            ></div>
                        </div>
                        <div className="carousel-caption d-none d-md-block" style={{paddingBottom:'70px'}}>
                            <h1 style={{ fontWeight: 'bold' }}>{texts[index]}</h1>
                            <h3 style={{ fontWeight: 'bold' }}>{stexts[index]}</h3>
                            {renderButtons(index)}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ImageCarousel;