import React from 'react';
import {Route, Link} from "react-router-dom";
import './a.css'
function Daou() {
    return(
        <div className='container'>
            <div className='mainBox'>
                <div className='content'>
                이름 : Daou<br/><br/>
                기술스택 : react + firebase db<br/><br/>
                깃헙 링크 : <Link to='https://github.com/kim-wnsgk/daou.git'>https://github.com/kim-wnsgk/daou.git</Link><br/><br/>
                설명 : 다우기술 주관 경연대회 출품작으로 기업 웹 페이지를 간단하게 구성
                </div>
            </div>
        
           
        </div>
    )
}
export default Daou