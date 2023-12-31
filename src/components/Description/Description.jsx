import { useRef, useEffect, useState } from 'react';

import css from './Description.module.css';
import '../../index.css';

import calendarMob1x from '../../img/main-page/mobile/mobile-calendar.png';
import calendarMob2x from '../../img/main-page/mobile/mobile-calendar@2x.png';
import calendarTabl1x from '../../img/main-page/tablet/tablet-calendar.png';
import calendarTabl2x from '../../img/main-page/tablet/tablet-calendar@2x.png';
import calendarDesk1x from '../../img/main-page/desktop/desktop-calendar.png';
import calendarDesk2x from '../../img/main-page/desktop/desktop-calendar@2x.png';

import sidebarMob1x from '../../img/main-page/mobile/mobile-sidebar.png';
import sidebarMob2x from '../../img/main-page/mobile/mobile-sidebar@2x.png';
import sidebarTabl1x from '../../img/main-page/tablet/tablet-sidebar.png';
import sidebarTabl2x from '../../img/main-page/tablet/tablet-sidebar@2x.png';
import sidebarDesk1x from '../../img/main-page/desktop/desktop-sidebar.png';
import sidebarDesk2x from '../../img/main-page/desktop/desktop-sidebar@2x.png';

import allInOneMob1x from '../../img/main-page/mobile/mobile-all-in-one.png';
import allInOneMob2x from '../../img/main-page/mobile/mobile-all-in-one@2x.png';
import allInOneTabl1x from '../../img/main-page/tablet/tablet-all-in-one.png';
import allInOneTabl2x from '../../img/main-page/tablet/tablet-all-in-one@2x.png';
import allInOneDesk1x from '../../img/main-page/desktop/desktop-all-in-one.png';
import allInOneDesk2x from '../../img/main-page/desktop/desktop-all-in-one@2x.png';

export default function Description() {
  const elementRefs = [useRef(), useRef(), useRef()];
  const [elVisibility, setElVisibility] = useState([false, false, false]);

  useEffect(() => {
    const observers = elementRefs.map((ref, index) => {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];

        setElVisibility(prevVisibility => {
          const updatedVisibility = [...prevVisibility];

          updatedVisibility[index] = entry.isIntersecting;

          return updatedVisibility;
        });
      });

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  });

  return (
    <div className={css.bodyContainer}>
      <div className="container">
        <section className={css.descrSection}>
          <ul className={css.descrList}>
            <li
              ref={elementRefs[0]}
              className={`${css.descrItem} 
              ${elVisibility[0] ? css.visible : css.hidden}`}
            >
              <div className={css.descrWrapper}>
                <p className={css.descrNum}>1.</p>
                <p className={css.descrAccent}>Calendar</p>
                <p className={css.descrTitle}>view</p>
                <p className={css.descrText}>
                  GooseTrack's Calendar view provides a comprehensive overview
                  of your schedule, displaying all your tasks, events, and
                  appointments in a visually appealing and intuitive layout.
                </p>
              </div>
              <picture
                className={`${css.img} ${
                  elVisibility[0] ? css.visible : css.hidden
                }`}
              >
                <source
                  media="(max-width: 767px)"
                  srcSet={`${calendarMob1x} 1x, ${calendarMob2x} 2x`}
                />
                <source
                  media="(min-width: 768px) and (max-width: 1439px)"
                  srcSet={`${calendarTabl1x} 1x, ${calendarTabl2x} 2x`}
                />
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${calendarDesk1x} 1x, ${calendarDesk2x} 2x`}
                />
                <img loading="lazy" src={calendarMob1x} alt="Calendar" />
              </picture>
            </li>
            <li
              ref={elementRefs[1]}
              className={`${css.descrItem} 
              ${elVisibility[1] ? css.visible : css.hiddenReversed}`}
            >
              <div className={css.descrWrapperSidebar}>
                <p className={css.descrNum}>2.</p>
                <p className={css.descrTitle}>SIDEBAR</p>
                <p className={css.descrText}>
                  GooseTrack offers easy access to your account settings,
                  calendar, and filters. The "My Account" section allows you to
                  manage your profile information and preferences, while the
                  calendar provides a quick and convenient way to view your
                  upcoming events and tasks.
                </p>
              </div>
              <picture
                className={`${css.img} ${
                  elVisibility[1] ? css.visible : css.hidden
                } ${elVisibility[1] ? css.visible : css.hiddenReversed}`}
              >
                <source
                  media="(max-width: 767px)"
                  srcSet={`${sidebarMob1x} 1x, ${sidebarMob2x} 2x`}
                />
                <source
                  media="(min-width: 768px) and (max-width: 1439px)"
                  srcSet={`${sidebarTabl1x} 1x, ${sidebarTabl2x} 2x`}
                />
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${sidebarDesk1x} 1x, ${sidebarDesk2x} 2x`}
                />
                <img loading="lazy" src={sidebarMob1x} alt="Calendar" />
              </picture>
            </li>
            <li
              ref={elementRefs[2]}
              className={`${css.descrItem}
               ${elVisibility[2] ? css.visible : css.hidden}`}
            >
              <div className={css.descrWrapper}>
                <p className={css.descrNum}>3.</p>
                <p className={css.descrAccent}>all in</p>
                <p className={css.descrTitle}>one</p>
                <p className={css.descrText}>
                  GooseTrack is an all-in-one productivity tool that helps you
                  stay on top of your tasks, events, and deadlines. Say goodbye
                  to scattered to-do lists and hello to streamlined productivity
                  with GooseTrack.
                </p>
              </div>
              <picture
                className={`${css.img} ${
                  elVisibility[2] ? css.visible : css.hidden
                }`}
              >
                <source
                  media="(max-width: 767px)"
                  srcSet={`${allInOneMob1x} 1x, ${allInOneMob2x} 2x`}
                />
                <source
                  media="(min-width: 768px) and (max-width: 1439px)"
                  srcSet={`${allInOneTabl1x} 1x, ${allInOneTabl2x} 2x`}
                />
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${allInOneDesk1x} 1x, ${allInOneDesk2x} 2x`}
                />
                <img loading="lazy" src={allInOneMob1x} alt="Calendar" />
              </picture>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
