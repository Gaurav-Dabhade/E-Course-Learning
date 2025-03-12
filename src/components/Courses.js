import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import { ReactComponent as LeftIcon } from '../assets/icons/left_icon.svg';
import { ReactComponent as RightIcon } from '../assets/icons/right_icon.svg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { ReactComponent as ReactLogo } from '../assets/icons/react_logo.svg';
import { ReactComponent as JsLogo } from '../assets/icons/js_logo.svg';
import { ReactComponent as PhpLogo } from '../assets/icons/php_logo.svg';

export default function Courses() {
  return (
    <>
      <Row>
        <Col>
          <Stack>
            <h5 style={{ color: 'gray' }}>
              Courses
              <LeftIcon width='20' height='20' />{' '}
              <RightIcon width='20' height='20' />
            </h5>
            <div
              style={{ height: '63vh', overflowY: 'auto', overflowX: 'hidden' }}
            >
              <style>
                {`
          /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
          div::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for Firefox */
          div {
            scrollbar-width: none;  /* For Firefox */
          }

          /* Hide scrollbar for Internet Explorer */
          div {
            ms-overflow-style: none; /* For IE */
          }
        `}
              </style>
              <div
                style={{
                  // width: '100%',
                  maxWidth: '120%',
                  height: '120px',
                  backgroundColor: '#1976d2',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px',
                  //   padding: '20px',
                  //   marginLeft:'0',
                  //    marginTop:'15%'
                }}
              >
                <Row>
                  <Col xs={2}>
                    <ReactLogo
                      width='50'
                      height='50'
                      style={{ margin: '10px', marginRight: '0' }}
                    />
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <p
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '0',
                      }}
                    >
                      The complete React Course.
                    </p>
                    <p style={{ color: 'white' }}>Learn from begining</p>
                  </Col>
                  <Col style={{ marginTop: '10px', marginLeft: '10px' }}>
                    {' '}
                    <Button variant='light'>10</Button>
                    <p style={{ color: 'white' }}>Enrolled</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} style={{ marginTop: '3%', marginLeft: '10px' }}>
                    <ProgressBar
                      now={50}
                      style={{ height: '5px', backgroundColor: 'blue' }}
                    >
                      {' '}
                      <div
                        style={{ width: '50%', backgroundColor: 'white' }}
                      />{' '}
                    </ProgressBar>
                  </Col>
                  <Col>
                    {' '}
                    <p style={{ color: 'white' }}>Enroll</p>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  // width: '100%',
                  maxWidth: '120%',
                  height: '120px',
                  backgroundColor: '#7e57c2',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px',
                  //   padding: '20px',
                  //   marginLeft:'0',
                  marginTop: '4%',
                }}
              >
                <Row>
                  <Col xs={2}>
                    <PhpLogo
                      width='50'
                      height='50'
                      style={{ margin: '10px', marginRight: '0' }}
                    />
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <p
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '0',
                      }}
                    >
                      The complete php Course.
                    </p>
                    <p style={{ color: 'white' }}>Learn from begining</p>
                  </Col>
                  <Col style={{ marginTop: '10px', marginLeft: '10px' }}>
                    {' '}
                    <Button variant='light'>8</Button>
                    <p style={{ color: 'white' }}>Enrolled</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} style={{ marginTop: '3%', marginLeft: '10px' }}>
                    <ProgressBar
                      now={40}
                      style={{ height: '5px', backgroundColor: 'blue' }}
                    >
                      {' '}
                      <div
                        style={{ width: '40%', backgroundColor: 'white' }}
                      />{' '}
                    </ProgressBar>
                  </Col>
                  <Col>
                    {' '}
                    <p style={{ color: 'white' }}>Enroll</p>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  // width: '100%',
                  maxWidth: '120%',
                  height: '120px',
                  backgroundColor: '#e64a19',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px',
                  //   padding: '20px',
                  //   marginLeft:'0',
                  marginTop: '4%',
                }}
              >
                <Row>
                  <Col xs={2}>
                    <JsLogo
                      width='50'
                      height='50'
                      style={{ margin: '10px', marginRight: '0' }}
                    />
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <p
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '0',
                      }}
                    >
                      The complete Javascript Course.
                    </p>
                    <p style={{ color: 'white' }}>Learn from begining</p>
                  </Col>
                  <Col style={{ marginTop: '10px', marginLeft: '10px' }}>
                    {' '}
                    <Button variant='light'>5</Button>
                    <p style={{ color: 'white' }}>Enrolled</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} style={{ marginTop: '3%', marginLeft: '10px' }}>
                    <ProgressBar
                      now={25}
                      style={{ height: '5px', backgroundColor: 'blue' }}
                    >
                      {' '}
                      <div
                        style={{ width: '25%', backgroundColor: 'white' }}
                      />{' '}
                    </ProgressBar>
                  </Col>
                  <Col>
                    {' '}
                    <p style={{ color: 'white' }}>Enroll</p>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  // width: '100%',
                  maxWidth: '120%',
                  height: '120px',
                  backgroundColor: '#ffb300',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px',
                  //   padding: '20px',
                  //   marginLeft:'0',
                  marginTop: '4%',
                }}
              >
                <Row>
                  <Col xs={2}>
                    <JsLogo
                      width='50'
                      height='50'
                      style={{ margin: '10px', marginRight: '0' }}
                    />
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <p
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '0',
                      }}
                    >
                      The complete JavaScript Course.
                    </p>
                    <p style={{ color: 'white' }}>Learn from begining</p>
                  </Col>
                  <Col style={{ marginTop: '10px', marginLeft: '10px' }}>
                    {' '}
                    <Button variant='light'>9</Button>
                    <p style={{ color: 'white' }}>Enrolled</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} style={{ marginTop: '3%', marginLeft: '10px' }}>
                    <ProgressBar
                      now={50}
                      style={{ height: '5px', backgroundColor: 'blue' }}
                    >
                      {' '}
                      <div
                        style={{ width: '50%', backgroundColor: 'white' }}
                      />{' '}
                    </ProgressBar>
                  </Col>
                  <Col>
                    {' '}
                    <p style={{ color: 'white' }}>Enroll</p>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  // width: '100%',
                  maxWidth: '120%',
                  height: '120px',
                  backgroundColor: '#e64a19',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px',
                  //   padding: '20px',
                  //   marginLeft:'0',
                  marginTop: '4%',
                }}
              >
                <Row>
                  <Col xs={2}>
                    <ReactLogo
                      width='50'
                      height='50'
                      style={{ margin: '10px', marginRight: '0' }}
                    />
                  </Col>
                  <Col
                    xs={6}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <p
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '0',
                      }}
                    >
                      The complete php Course.
                    </p>
                    <p style={{ color: 'white' }}>Learn from begining</p>
                  </Col>
                  <Col style={{ marginTop: '10px', marginLeft: '10px' }}>
                    {' '}
                    <Button variant='light'>9</Button>
                    <p style={{ color: 'white' }}>Enrolled</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} style={{ marginTop: '3%', marginLeft: '10px' }}>
                    <ProgressBar
                      now={50}
                      style={{ height: '5px', backgroundColor: 'blue' }}
                    >
                      {' '}
                      <div
                        style={{ width: '50%', backgroundColor: 'white' }}
                      />{' '}
                    </ProgressBar>
                  </Col>
                  <Col>
                    {' '}
                    <p style={{ color: 'white' }}>Enroll</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </>
  );
}
