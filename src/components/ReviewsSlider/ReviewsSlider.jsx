import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from 'redux/reviews/reviewsOperations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Keyboard } from 'swiper/modules';

import { selectReviews } from '../../redux/reviews/selectors';

// import reviews from './reviews.json';

import '../../index.css';
import css from './ReviewsSlider.module.css';

import { AiFillStar } from 'react-icons/ai';
import { PiUserBold } from 'react-icons/pi';
import icons from '../../img/icons.svg';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ReviewsSlider() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="container">
      <section className={css.reviewsSection}>
        <div className={css.wrapper}>
          <h2 className={css.title}>Reviews</h2>
          <Swiper
            spaceBetween={30}
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
            {reviews.map(({ avatarURL, name, text, rating, _id }) => {
              return (
                <SwiperSlide key={_id}>
                  <div className={css.reviewItem}>
                    <div className={css.userInfo}>
                      <div className={css.userAvatar}>
                        {avatarURL ? (
                          <img src={avatarURL} alt={name + ' avatar'} />
                        ) : (
                          <PiUserBold size={30} />
                          // <svg
                          //   className={css.avatarPlaceholder}
                          //   width="30px"
                          //   height="30px"
                          // >
                          //   <use href={icons + '#ph_user'}></use>
                          // </svg>
                        )}
                      </div>

                      <div>
                        <p className={css.userName}>{name ? name : 'Guest'}</p>
                        <div className={css.userRating}>
                          {Array.from({ length: 5 }, (_, idx) => (
                            // <svg key={idx} width="14px" height="14px">
                            //   <use href={icons + '#star'}></use>
                            // </svg>
                            <AiFillStar
                              key={idx}
                              size={14}
                              color={idx < rating ? '#FFAC33' : '#CEC9C1'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className={css.reviewComment}>{text}</p>
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
