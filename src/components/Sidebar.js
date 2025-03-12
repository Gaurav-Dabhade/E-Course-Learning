import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import { ReactComponent as MyIcon } from '../assets/icons/circle_icon.svg';
import {ReactComponent as ChartIcon} from '../assets/icons/chart_icon.svg';
import {ReactComponent as CommentIcon} from '../assets/icons/comment_icon.svg';
import {ReactComponent as ResourceIcon} from '../assets/icons/resource_icon.svg';
import {ReactComponent as CourseIcon} from '../assets/icons/course_icon.svg';
import {ReactComponent as ToolIcon} from '../assets/icons/tool_icon.svg';
import {ReactComponent as Pro_Icon} from '../assets/icons/pro_icon.svg';

export default function Sidebar() {
  return (

     <Stack gap={3} >
      <h4 style={{marginBottom:'10vh'}}> <MyIcon width="30" height="30" />Course</h4>
      <Link to="/performance" style={{ textDecoration: 'none', color: 'Blue' }}><ChartIcon width="20" height="20"/> Performance</Link>
      <Link to="/courses" style={{ textDecoration: 'none', color: 'black' }}><CourseIcon width="20" height="20"/> Courses</Link>
      <Link to="/comment" style={{ textDecoration: 'none', color: 'black' }}><CommentIcon width="20" height="20"/> Comment</Link>
      <Link to="/tools" style={{ textDecoration: 'none', color: 'black' }}><ToolIcon width="20" height="20"/> Tools</Link>
      <Link to="/resources" style={{ textDecoration: 'none', color: 'black' }}><ResourceIcon width="20" height="20"/> Resources</Link>

      <div
         style={{
        // width: '100%', 
         maxWidth: '150px', 
        // height: '150px', 
          backgroundColor: 'black', 
           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
           borderRadius: '20px', 
        //   padding: '20px', 
        //   marginLeft:'0',
        //    marginTop:'15%'
        }}
      >
     <Row className="d-block d-md-flex justify-content-center">
        <Col
          className="d-flex justify-content-center"
          style={{ marginTop: '20px',color:'#9e9e9e' }}
        >
          <p>Upgrade your <br/> 
            plan <Link to='/pro_plans' style={{textDecoration: 'underline',color:'white',fontWeight:'bold'}}>Pro plan<br/>  <Pro_Icon width="35" height="35"/></Link></p>
            
        </Col>
      </Row>
      </div>



      </Stack>
     
  )
}
