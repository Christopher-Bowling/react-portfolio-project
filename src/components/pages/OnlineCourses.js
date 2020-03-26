import React from 'react';
import bbvbtn from './img/bbvbtn.jpg';
import moveUpStakes from './img/moveUpStakes.jpg';

const OnlineCourses = () => {
  return (
    <>
      <div class='container p-3 my-5'>
        <h1 class='text-center display-2 text-primary'>Online Courses</h1>
      </div>

      <div id='online-courses-wrapper'>
        <div class='row p-3' id='udemy-course-1'>
          <div class='col-lg-5'>
            <a
              class='text-dark'
              href='https://www.udemy.com/course/bigblindcallvsbtnraise/?referralCode=3FE4FA9E3955FE3332D0'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                style={{ maxWidth: '400px' }}
                class='img-fluid mx-auto d-block'
                src={bbvbtn}
                alt='bbvbtn'
              />
            </a>
          </div>
          <div class='col-lg-7'>
            <a
              class='text-dark'
              id='courseTitle'
              href='https://www.udemy.com/course/bigblindcallvsbtnraise/?referralCode=3FE4FA9E3955FE3332D0'
              target='_blank'
              rel='noreferrer noopener'
            >
              <h2 class='py-3 mb-4'>
                BB Call vs Btn 2x Raise: Perfecting Btn Play
              </h2>
            </a>

            <p class='online-course-paragraphs'>
              In this online course, you will learn how to perfect your play as
              the button aggressor after the big blind defends vs your raise. I
              will show you preflop ranges I currently use, go over a variety of
              postflop situations with you in PioSolver, and review hundreds of
              examples of hands I have played in my Hold'em Manager pertaining a
              bb call vs a btn raise. After taking this course, you should
              immediately be able to win more money when you get in these common
              situations yourself.
            </p>
          </div>
        </div>

        <hr />

        <div class='row p-3 mb-5'>
          <div class='col-lg-5 align-items-center' style={{ width: '200px' }}>
            <a
              href='https://www.udemy.com/course/moveupstakesquickly/?referralCode=FF902FC9B716F3D55457'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                style={{ maxWidth: '400px' }}
                class='img-thumbnail img-fluid mx-auto d-block'
                src={moveUpStakes}
                alt='moveUpStakes'
              />
            </a>
          </div>
          <div class='col-lg-7'>
            <a
              class='text-dark'
              id='courseTitle'
              href='https://www.udemy.com/course/moveupstakesquickly/?referralCode=FF902FC9B716F3D55457'
              target='_blank'
              rel='noreferrer noopener'
            >
              <h2 class='py-3 mb-4'>
                Advanced Online Poker Concepts to Move Up Stakes Quickly
              </h2>
            </a>
            <p class='online-course-paragraphs'>
              In this Online Poker Course, you will learn the framework to move
              up stake levels quicker and how to speed up the learning
              process. I will teach you all the different factors involved and
              teach you how I have been able to learn NLH very quickly and
              master a lot of complex spots. GTO theory is a colossal concept
              that can seem very intimidating, but in my Online Course, I teach
              the student how to practically approach GTO theory to learn and
              apply it to their own game to get better and better. In this
              course, my goal is for the student to be able to master the
              practices I teach and to immediately move up stake levels within
              the first 1-3 months of taking my online course. I will completely
              reshape the students perception of the learning process and teach
              the student how to have an awesome lifestyle being an Online Poker
              Player.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCourses;
