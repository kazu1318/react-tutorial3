import React, { useState } from 'react';

export default function App() {
    const [displayedImage, setDisplayedImage] = useState('images/pic1.jpg');
    const [overlayStyle, setOverlayStyle] = useState({ backgroundColor: 'rgba(0, 0, 0, 0)' }); 
    const [darken, setDarken] = useState(true);

    const images = [
        {src:"/images/pic1.jpg", alt:"Closeup of a human eye"},
        {src:"/images/pic2.jpg", alt:"Rock that looks like a wave"},
        {src:"/images/pic3.jpg", alt:"Purple and white pansies"},
        {src:"/images/pic4.jpg", alt:"Section of wall from a pharoah's tomb"},
        {src:"/images/pic5.jpg", alt:"Large moth on a leaf"}
    ]

    function handleThumbnailClick(src) {
        setDisplayedImage(src);
      }
    
    function handleDarkenToggle() {
        if (darken) {
          setOverlayStyle({ backgroundColor: 'rgba(0, 0, 0, 0.5)' });
        } else {
          setOverlayStyle({ backgroundColor: 'rgba(0, 0, 0, 0)' });
        }
        setDarken(!darken);
      }

      return (
        <>
          <h1>Image gallery example</h1>
          <div className="full-img">
            <img className="displayed-img" src={displayedImage} alt="Displayed image" />
            <div className="overlay" style={overlayStyle}></div>
            <button className="dark" onClick={handleDarkenToggle}>
              {darken ? 'Darken' : 'Lighten'}
            </button>
          </div>
          <div className="thumb-bar">
            {images.map(function(image, index) {
              return (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  onClick={function() { handleThumbnailClick(image.src); }}
                />
              );
            })}
          </div>
        </>
      );
    }