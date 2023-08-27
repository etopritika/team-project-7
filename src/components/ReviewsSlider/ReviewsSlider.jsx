import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Keyboard } from 'swiper/modules';

import '../../index.css';
import css from './ReviewsSlider.module.css';

import icons from '../../img/icons.svg';
import reviews from './reviews.json';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ReviewsSlider() {
  return (
    <div className="container">
      <section className={css.reviewsSection}>
        <div className={css.wrapper}>
          <h2 className={css.title}>Reviews</h2>
          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '#prevBtn',
              nextEl: '#nextBtn',
            }}
            breakpoints={{
              1440: {
                slidesPerView: 2,
              },
            }}
            keyboard={{ enabled: true }}
            modules={[Autoplay, Navigation, Keyboard]}
          >
            {reviews.map(({ avatar, name, comment, rating }) => {
              return (
                <SwiperSlide key={name}>
                  <div className={css.reviewItem}>
                    <div className={css.userInfo}>
                      <div className={css.userAvatar}>
                        {avatar ? (
                          <img src={avatar} alt={name + 'avatar'} />
                        ) : (
                          <svg
                            className={css.avatarPlaceholder}
                            width="30px"
                            height="30px"
                          >
                            <use href={icons + '#ph_user'}></use>
                          </svg>
                        )}
                      </div>

                      <div>
                        <p className={css.userName}>{name}</p>
                        <div className={css.userRating}>
                          {Array.from({ length: 5 }, (_, idx) => (
                            <svg key={idx} width="14px" height="14px">
                              <use href={icons + '#star'}></use>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className={css.reviewComment}>{comment}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={css.btnWrapper}>
            <button type="button" id="prevBtn" className={css.btn}>
              <svg width="61px" height="61px">
                <use href={icons + '#down-arrow-1-2'}></use>
              </svg>
            </button>

            <button type="button" id="nextBtn" className={css.btn}>
              <svg width="61px" height="61px">
                <use href={icons + '#down-arrow-1-2'}></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
