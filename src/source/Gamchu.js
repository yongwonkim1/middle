import React from 'react';
import {Route, Link} from "react-router-dom";
import './a.css'
function Gamchu() {
    return(
        <div className='container'>
            <div className='mainBox'>
                <div className='content'>
                이름 : 겜추<br/><br/>
                기술스택 : jsp + spring + mysql<br/><br/>
                깃헙 링크 : <Link to='https://github.com/kyuchory/javaProject_gameCommunity.git'>https://github.com/kyuchory/javaProject_gameCommunity.git</Link><br/><br/>
                설명 : 게임 커뮤니티로 실시간 게임순위와 게임 정보를 제공하고 각종 게시판에서 사용자들간의 소통이 가능한 사이트 
                </div>
            </div>
        
           
        </div>
    )
}
export default Gamchu