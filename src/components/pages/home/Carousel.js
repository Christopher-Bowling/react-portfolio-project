import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

const items = [
  {
    src: '/img/carousel-poker.jpg',
    altText: 'Slide 1',
    caption: 'Welcome to My Site!',
    className: '',
    imgClass: 'welcomeImg',
    id: 'welcome'
  },
  {
    src: '/img/bbvbtn.jpg',
    altText: 'Slide 2',
    caption: 'BB Call vs Button Raise Udemy Online Course',
    coupon: 'Use Coupon Code FIVEOFFCOURSE2 to get $5.00 off!',
    url:
      'https://www.udemy.com/course/bigblindcallvsbtnraise/?referralCode=3FE4FA9E3955FE3332D0',
    className: 'c-link',
    id: 'bbVsBtn'
  },
  {
    src: '/img/moveUpStakes.jpg',
    altText: 'Slide 3',
    caption:
      'Advanced Online Poker Concepts to Move Up Stakes Quickly Online Course',
    coupon: 'Use Coupon Code FIVEOFFCOURSE1 to get $5.00 off!',
    url:
      'https://www.udemy.com/course/moveupstakesquickly/?referralCode=FF902FC9B716F3D55457',
    className: 'c-link',
    id: ''
  }
];

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{ width: '100%' }}
      >
        <img
          id='carousel-pic'
          className={`d-block img-fluid mx-auto ${item.imgClass}`}
          src={item.src}
          alt={item.altText}
        />
        <div className='carousel-caption d-md-block p-1 mb-3'>
          <a
            className={item.className}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='carousel-text p-3 mx-auto' id={`${item.id}`}>
              <h3 className=''>{item.caption}</h3>
              <p>{item.coupon}</p>
            </div>
          </a>
        </div>

        {/* <a href={item.url} target="_blank" rel="noopener noreferrer">
          <CarouselCaption
            className={`carousel-text mx-auto ${item.className}`}
            captionText={item.caption}
            captionHeader={item.caption}
          ></CarouselCaption>
        </a> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default MyCarousel;
