import React from 'react'
import Link from 'gatsby-link'

const Gallery = () => (
  <section class="gallery" id="gallery">
        <div class="container">
          <h1 class="gallery-heading">Zobacz jak było!</h1>
          <div class="gallery-slider image-set">
            <a href="/img/photos/backendCamp1.jpg" data-lightbox="image" style=""><img src="/img/photos/backendCamp1.jpg"></a><a href="/img/photos/backendCamp2.jpg" data-lightbox="image" style=""><img src="/img/photos/backendCamp2.jpg"></a><a href="/img/photos/backendCamp3.jpg" data-lightbox="image" style=""><img src="/img/photos/backendCamp3.jpg"></a>
          </div>
        </div>
      </section>
)

export default Gallery