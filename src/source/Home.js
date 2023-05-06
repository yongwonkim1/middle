import React from 'react';
import {Route, Link} from "react-router-dom";
import './Home.css'
function Home() {
    return(
        <div className='container'>
            <div className='mainBox'>
                <div className='top'>
                    <div className='imageBox'>
                        <img className='image' src={require('./image.jpg')}></img>
                    </div>
                    <div className='inform'>
                        이름 : 김용원<br/><br/>
                        나이 : 27<br/><br/>
                        전공 : 응용컴퓨터공학과<br/><br/>
                        학번 : 32160882
                    </div>
                </div>
                <div className='bottom'>
                    <p className='pro'>프로젝트</p>
                    <table className='table'>
                        <tr>
                            <th className='th'><Link to="/Gamchu"><button className='button'>겜추</button></Link></th>
                            <th className='th'><Link to="/Silvable"><button className='button'>실버블</button></Link></th>
                            <th className='th'><Link to="/Daou"><button className='button'>다우</button></Link></th>
                            <th className='th'><Link to="/CodeChallenge"><button className='button'>CodeChal</button></Link></th>
                            <th className='th'><Link to="/Trip"><button className='button'>여기저기</button></Link></th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home;