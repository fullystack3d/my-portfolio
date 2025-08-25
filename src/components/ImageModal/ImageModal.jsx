// src/components/ImageModal/ImageModal.jsx
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ImageModal;