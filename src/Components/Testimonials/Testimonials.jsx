import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/white-arrow.png'
import back_icon from '../../assets/left-arrow.png'
import user_1 from '../../assets/user1.avif'
import user_2 from '../../assets/user2.avif'
import user_3 from '../../assets/user3.avif'
import user_4 from '../../assets/user4.avif'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
  const slideForward = () =>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () =>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className ='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>EDUtOWN, USA</span>
                            </div>
                        </div>
                        <p>My university offers a vibrant campus life, fostering connections among students. Diverse clubs and events enrich our social experiences greatly.</p>
                    </div>
                </li>
                <li>
                    <div className ='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Emma Watson</h3>
                                <span>EDUtOWN, USA</span>
                            </div>
                        </div>
                        <p>The faculty is knowledgeable and approachable, providing invaluable support. Their commitment to student success truly enhances the learning environment.</p>
                    </div>
                </li>
                <li>
                    <div className ='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Camila Smith</h3>
                                <span>EDUtOWN, USA</span>
                            </div>
                        </div>
                        <p>Academic programs are rigorous yet rewarding. The curriculum encourages critical thinking and prepares us well for future careers and challenges.</p>
                    </div>
                </li>
                <li>
                    <div className ='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Serena Maguire</h3>
                                <span>EDUtOWN, USA</span>
                            </div>
                        </div>
                        <p>Campus facilities are modern and well-maintained, creating an inspiring study atmosphere. Libraries and study spaces promote productivity and collaboration.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
