import React , { useEffect }  from 'react';
import homeStyle from './Home.module.css';
import Logo from '../../assets/images/logo.png';
import Roadster from '../../assets/images/roadster.png';
const Home = () => {
    useEffect(() => {

        const handler = event => {
            let scollSection = document.querySelector("#scrollSection");
           
            let delY = event.deltaY;
            if (delY > 0) {
                delY = -delY;
                scollSection.style.transform = `translateY(${delY}%)`;
            } else {
                delY = 0;
                scollSection.style.transform = `translateY(${delY}%)`;
            }
        };


        document.body.addEventListener("wheel", handler);

        return () => document.body.removeEventListener("wheel", handler);

    });


    return (
        <div className={homeStyle.main}>
            <div className={homeStyle.logo}>
                <img src={Logo} alt="Logo"/>
            </div>
            
           <div className={homeStyle.scrollSection} id={homeStyle.sectionOne}>
           <div className={homeStyle.roadster}>
                <img src={Roadster} alt="Roadster"/>
            </div>
            <h2 className={homeStyle.title}>THE ULTIMATE PAGANI CREATION: THE ROADSTER BC</h2>
           </div>
           <div className={homeStyle.scrollSection} id="scrollSection" ></div>
        </div>
    )
}

export default Home;