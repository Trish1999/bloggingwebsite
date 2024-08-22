import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Carousel.css'
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
      <>
    <div>
          <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={500}
              showStatus={false}
              height={true}
          >
              <div>
                  <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" alt="Slide 1" />
                        <div className="carousel-text">
                            <h2>Slide 1 Title</h2>
                            <p>This is the description for slide 1.</p>
                        </div>
                    </div>
              <div>
                  <img src="https://i.postimg.cc/dtLWZmwx/pexels-cottonbro-studio-9656754.jpg" alt="Slide 2" />
              
                        <div className="carousel-text">
                            <h2>Slide 2 Title</h2>
                            <p>This is the description for slide 2.</p>
                        </div></div>
              <div>
                  <img src="https://i.postimg.cc/L8N4npDS/pexels-miguel-acosta-1259626.jpg" alt="Slide 3" />
              
                        <div className="carousel-text">
                            <h2>Slide 3 Title</h2>
                            <p>This is the description for slide 3.</p>
                        </div></div>
          </Carousel>
            </div>
            <ul className={styles.heading1}>
                <li style={{ '--i': 1 }}>T</li>
                <li style={{ '--i': 1.3 }}>E</li>
                <li style={{ '--i': 1.6 }}>C</li>
                <li style={{ '--i': 1.9 }}>H</li>
                <li style={{ '--i': 2 }}> </li>
                <li style={{ '--i': 2.2 }}>N</li>
                <li style={{ '--i': 2.5 }}>E</li>
                <li style={{ '--i': 2.8 }}>W</li>
                <li style={{ '--i': 3.1 }}>S</li>
            </ul>
            <div className={styles.post}>
              <div class={styles.card}>
                  <div class={styles.imgBx}>
                        <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" />
                  </div>
                  <div class={styles.details}>
                      <h2>What is Lorem Ipsum?</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                          and
                          scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div class={styles.card}>
                    <div class={styles.imgBx}>
                        <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" />
                    </div>
                    <div class={styles.details}>
                        <h2>What is Lorem Ipsum?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and
                            scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div class={styles.card}>
                    <div class={styles.imgBx}>
                        <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" />
                    </div>
                    <div class={styles.details}>
                        <h2>What is Lorem Ipsum?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and
                            scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div class={styles.card}>
                    <div class={styles.imgBx}>
                        <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" />
                    </div>
                    <div class={styles.details}>
                        <h2>What is Lorem Ipsum?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and
                            scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div class={styles.card}>
                    <div class={styles.imgBx}>
                        <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" />
                    </div>
                    <div class={styles.details}>
                        <h2>What is Lorem Ipsum?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and
                            scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            </>
  )
}

export default HomePage
