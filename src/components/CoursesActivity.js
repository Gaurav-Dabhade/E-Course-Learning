import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import PlusIcon from '../assets/icons/plus_icon.png';
import { ReactComponent as LeftIcon } from '../assets/icons/left_icon.svg';
import { ReactComponent as RightIcon } from '../assets/icons/right_icon.svg';

export default function CoursesActivity() {
  return (
    <>
      <Row>
        <Col>
          <Stack>
            <h3>Course Activity</h3>
            <p>Jan 1st, 2025</p>
          </Stack>
        </Col>

        <Col className='d-flex align-items-center justify-content-end'>
          <img src={PlusIcon} alt='Icon' width='50' height='50' />
        </Col>
      </Row>
    </>
  );
}
