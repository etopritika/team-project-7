import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Keyboard } from 'swiper/modules';

import css from './ReviewsSlider.module.css';
import reviews from './reviews.json';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ReviewsSlider() {
  return (
    <section className={css.reviewsSection}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Reviews</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: '#prevBtn',
            nextEl: '#nextBtn',
          }}
          keyboard={{ enabled: true }}
          modules={[Autoplay, Navigation, Keyboard]}
        >
          {reviews.map(({ name, comment }) => {
            return (
              <SwiperSlide key={name}>
                <div className={css.reviewItem}>
                  <p>{name}</p>
                  <p>{comment}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={css.btnWrapper}>
          <div id="prevBtn" className={css.btn}></div>
          <div id="nextBtn" className={css.btn}></div>
        </div>
      </div>
    </section>
  );
}
