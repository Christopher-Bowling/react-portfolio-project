import React from 'react';
import playingPoker from './img/playingPoker.jpg';
import { Card, CardText, CardBody } from 'reactstrap';

const Coaching = () => {
  return (
    <>
      <div className='container p-3 my-5'>
        <h1 className='text-center display-2 text-primary'>One-on-One Coaching</h1>
      </div>

      <div className='container mb-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-xl-5 mb-5 mb-xl-0'>
            <Card>
              <img className='card-img-top img-fluid' src={playingPoker} alt='' />
              <Card>
                <h4 className='card-header text-center'>Contact Me For Coaching</h4>
                <CardText className='p-4'>
                  I am happy to help you in one-on-one coaching sessions with
                  however you want to use that time. I do believe you can get
                  the most out of coaching by recording footage of you playing
                  online or writing down lots of Live poker hand histories, then
                  discussing all the situations during our coaching time
                  together.
                </CardText>
              </Card>
            </Card>
          </div>

          <div className='col-xl-7 d-flex'>
            <Card className='card bottom w-100'>
              <div className='card-header bg-primary mb-lg-4'>
                <h3 className='text-light font-weight-bold text-center'>
                  Request Coaching
                </h3>
              </div>
              <form>
                <CardBody className='d-flex flex-column'>
                  <div className='form-group row align-items-center m-3 mb-lg-4'>
                    <label
                      className='col-md-3 col-form-label text-center'
                      htmlFor='name'
                    >
                      Name
                    </label>
                    <div className='col-md-9'>
                      <input
                        className='form-control form-control-lg'
                        type='text'
                        id='name'
                        placeholder='Enter name'
                      />
                    </div>
                  </div>
                  <div className='form-group row align-items-center m-3 mb-lg-4'>
                    <label
                      className='col-md-3 col-form-label text-center'
                      htmlFor='email'
                    >
                      Email address
                    </label>
                    <div className='col-md-9'>
                      <input
                        className='form-control form-control-lg'
                        type='email'
                        id='email'
                        placeholder='Enter email'
                      />
                      <small className='form-text text-muted'>
                        Your email will not be shared
                      </small>
                    </div>
                  </div>
                  <fieldset className='form-group'>
                    <div className='row align-items-start m-3 mb-lg-4'>
                      <legend className='col-form-label col-md-3 text-center coachHeader'>
                        Coaching Fees
                      </legend>
                      <div className='col-md-9'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='gridRadios'
                            id='gridRadios1'
                            value='option1'
                            checked
                          />
                          <label className='form-check-label' htmlFor='gridRadios1'>
                            $75.00 for 1 hour
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='gridRadios'
                            id='gridRadios2'
                            value='option2'
                          />
                          <label className='form-check-label' htmlFor='gridRadios2'>
                            $70.00/hr upfront for 5-9 hours
                          </label>
                        </div>
                        <div className='form-check pb-1'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='gridRadios'
                            id='gridRadios3'
                            value='option3'
                          />
                          <label className='form-check-label' htmlFor='gridRadios3'>
                            $65.00/hr upfront for 10+ hours
                          </label>
                        </div>
                        <small className='form-text text-muted'>
                          Choose a coaching rate
                        </small>
                      </div>
                    </div>
                  </fieldset>
                  <div className='form-group row align-items-center my-4'>
                    <label
                      className='col-md-3 col-form-label text-center'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <div className='col-md-9'>
                      <textarea
                        className='form-control'
                        id='message'
                        rows='4'
                      ></textarea>
                    </div>
                  </div>
                  <button className='btn btn-dark btn-block mt-2' type='submit'>
                    Submit
                  </button>
                </CardBody>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coaching;
