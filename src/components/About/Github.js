import React from "react";
import GitHubCalender from "react-github-calender";
import { Row } from "react-bootstrap";

function GitHub(){
    const colorTheme = {
        background: 'transparent',
        text: '#ffffff',
        grade4: '#8400b8',
        grade3: '#b22ff4',
        grade2: '#b265f6',
        grade1: '#c084f5',
        grade0: '#ecd9fc',
    };

    return(
        <Row style={{
            justifyContent:'center',
            paddingBottom:'10px'
        }}>
            <h1 className='project-heading' style={{ paddingBottom:'20px' }}>Days I <strong className='purple'>Code</strong> 
            </h1>
            <GitHubCalender
                username='Thurstoncox3'
                blockSize={15}
                blockMargin={5}
                theme={colorTheme}
                fontSize={16}
                />
        </Row>
    );
}

export default GitHub;