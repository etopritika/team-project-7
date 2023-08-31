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
            {reviews.map(({ owner, text, rating, _id }) => {
              return (
                <SwiperSlide key={_id}>
                  <div className={css.reviewItem}>
                    <div className={css.userInfo}>
                      <div className={css.userAvatar}>
                        {owner ? (
                          <img
                            src={owner.avatarURL}
                            alt={owner.name + ' avatar'}
                            className={css.avatar}
                          />
                        ) : (
                          <PiUserBold
                            size={30}
                            className={css.avatarPlaceholder}
                          />
                        )}
                      </div>

                      <div>
                        <p className={css.userName}>
                          {owner ? owner.name : 'Guest'}
                        </p>
                        <div className={css.userRating}>
                          {Array.from({ length: 5 }, (_, idx) => (
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
