import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import {ReactComponent as TargetIcon} from '../assets/icons/target_icon.svg';
import {ReactComponent as CodeIcon} from '../assets/icons/code_icon.svg';
import {ReactComponent as DataIcon} from '../assets/icons/database_icon.svg';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';
import { Typography} from '@mui/material';


export default function Learning() {
    const [isLoading, setIsLoading] = React.useState(false);
  const [buttonLabel, setButtonLabel] = React.useState('Start');

  const { value: value1, reset: resetValue1 } = useCountUp({
    isCounting: isLoading,
    duration: 1,
    start: 0,
    end: 25,
    onComplete: () => {
      setIsLoading(false);
      setButtonLabel('Reset');
    },
  });

  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 75,
  });

    const learnings = [
        {
          id: 1,
          title: 'Target Audience Training',
          description: 'Learn the basics of React.',
          progress: 53, 
        },
        {
          id: 2,
          title: 'The complete Web Development',
          description: 'Deep dive into JavaScript.',
          progress: 75, 
        },
        {
          id: 3,
          title: 'Grow your community',
          description: 'Learn backend development using Node.js.',
          progress: 14, 
        },
      ];
    




  return (
    <>
    <Row>
    <h4>My Learning</h4>

    </Row>
    <Stack  gap={2}>
        <div style={{height: '39vh', overflowY: 'auto',overflowX: 'hidden',}}>
      <style>
        {`
          .learningBar::-webkit-scrollbar {
            display: none;
          }

        `}
      </style>  
    <Stack direction="horizontal" gap={2}
     style={{
     maxWidth: '120%', 
     height: '80px',  
       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
       borderRadius: '20px', 
       marginBottom:'10px'
    }}
  > 
  <div style={{padding:'30px'}}><TargetIcon width="40" height="40"/></div>
  <div><p style={{color:'black',fontWeight:'bold',marginBottom:'0'}}>Target Audience Training</p>
  <p style={{marginTop:'0'}}>Here is the caption</p></div>
  <div className='ms-auto'>
  <CircularProgress size="lg" determinate value={60}>
          <Typography style={{fontSize:'15px',color:'black',fontWeight:'bold'}}>{60}%</Typography>
        </CircularProgress>
  </div>

    </Stack>
    <Stack direction="horizontal" gap={2}
     style={{
     maxWidth: '120%', 
     height: '80px',  
       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
       borderRadius: '20px', 
       marginBottom:'10px'
    }}
  > 
  <div style={{padding:'30px'}}><CodeIcon width="40" height="40"/></div>
  <div><p style={{color:'black',fontWeight:'bold',marginBottom:'0'}}>The Complete Web Development</p>
  <p style={{marginTop:'0'}}>Here is the caption</p></div>
  <div className='ms-auto'>
  <CircularProgress size="lg" determinate value={75}>
          <Typography style={{fontSize:'15px',color:'black',fontWeight:'bold'}}>{75}%</Typography>
        </CircularProgress>
  </div>

    </Stack>
    <Stack direction="horizontal" gap={2}
     style={{
     maxWidth: '120%', 
     height: '80px',  
       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
       borderRadius: '20px', 
       marginBottom:'10px'
    }}
  > 
  <div style={{padding:'30px'}}><DataIcon width="40" height="40"/></div>
  <div><p style={{color:'black',fontWeight:'bold',marginBottom:'0'}}>Grow your community</p>
  <p style={{marginTop:'0'}}>Here is the caption</p></div>
  <div className='ms-auto'>
  <CircularProgress size="lg" determinate value={20}>
          <Typography style={{fontSize:'15px',color:'black',fontWeight:'bold'}}>{20}%</Typography>
        </CircularProgress>
  </div>

    </Stack>
   
  </div>
    </Stack>

    </>
  )
}
