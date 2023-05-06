import React from 'react';
import {Route, Link} from "react-router-dom";
import './a.css'
function Trip() {
    return(
        <div className='container'>
            <div className='mainBox'>
                <div className='content'>
                이름 : 여기저기<br/><br/>
                기술스택 : react + nodejs + mysql<br/><br/>
                깃헙 링크 : <Link to='https://github.com/kyuchory/BeatSbUp.git'>https://github.com/kyuchory/BeatSbUp.git</Link><br/><br/>
                설명 : 여행 관련 명소 정보를 제공하고 그 정보를 토대로 여행 코스를 작성하는 것을 돕는 웹 사이트
                </div>
            </div>
        
           
        </div>
    )
}
export default Trip