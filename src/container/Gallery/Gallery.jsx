import React from 'react';
import {image} from '../../constants';

import './Gallery.css';

const Gallery = () => (
 <div className='gallery_main'>
    <div className='topic_heading'>
      <h1>Gall<span className='diff'>ery</span></h1>
    </div>
    <div className='image_list'>
      <img src={image.gallery}   alt="images" />
      <img src={image.gallery1}  alt="images" />
      <img src={image.gallery2}  alt="images" />
      <img src={image.gallery3}  alt="images" />
      <img src={image.gallery4}  alt="images" />
      <img src={image.gallery5}  alt="images" />
      <img src={image.gallery6}  alt="images" />
      <img src={image.gallery7}  alt="images" />
      <img src={image.gallery8}  alt="images" />
      <img src={image.gallery9}  alt="images" />
      <img src={image.gallery10} alt="images" />
      <img src={image.gallery11} alt="images" />
      <img src={image.gallery12} alt="images" />
    </div>
 </div>
);

export default Gallery;