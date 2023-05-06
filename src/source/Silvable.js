import React from 'react';
import {Route, Link} from "react-router-dom";
import './a.css'
function Silvable() {
    return(
        <div className='container'>
            <div className='mainBox'>
                <div className='content'>
                이름 : 실버블<br/><br/>
                기술스택 : react native + nodejs + firebase<br/><br/>
                깃헙 링크 : <Link to='https://github.com/yongwonkim1/Silvable.git'>https://github.com/yongwonkim1/Silvable.git</Link><br/><br/>
                설명 : 노인 복지를 목적으로 노인 편의에 맞춘 다양한 기능들을 제공하는 어플
                </div>
            </div>
        
           
        </div>
    )
}
export default Silvable