import React from 'react';
import {Route, Link} from "react-router-dom";
import './a.css'
function CodeChallenge() {
    return(
        <div className='container'>
            <div className='mainBox'>
                <div className='content'>
                이름 : CodeChallenge<br/><br/>
                기술스택 : react + nodejs + mysql<br/><br/>
                깃헙 링크 : <Link to='https://github.com/parkmingue00/CodeChallenge.git'>https://github.com/parkmingue00/CodeChallenge.git</Link><br/><br/>
                설명 : 젠킨스의 자동화 테스트를 이용하여 사용자가 업로드하는 코드를 자동으로 테스트 및 채점 하는 온라인 저지 사이트
                </div>
            </div>
        
           
        </div>
    )
}
export default CodeChallenge