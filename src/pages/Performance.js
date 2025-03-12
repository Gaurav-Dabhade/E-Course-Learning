import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import CoursesActivity from '../components/CoursesActivity';
import Courses from '../components/Courses';
import UserDetails from '../components/UserDetails';
import Learning from '../components/Learning';

export default function Performance() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{padding:'3%',backgroundColor: '#f8f9fa'}}>
    <Container style={{ padding: '20px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',borderRadius: '20px' }}>
      <Row>
        <Col xs={12} sm={4} md={3}>
        <Sidebar />
        </Col>
        <Col xs={12} sm={4} md={4} style={{backgroundColor:'#f5f5f5',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',borderRadius: '20px'}}>
        <CoursesActivity/>
        <Courses/>
        </Col>
        <Col xs={12} sm={4} md={5} style={{paddingLeft:'30px'}}>
         <UserDetails/> 
        <Learning/>
         </Col>
      </Row>
    </Container>
  </div>
  )
}
