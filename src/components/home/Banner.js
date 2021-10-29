import React from "react";
import design from '../../images/design.svg'
import Person from '../../images/person.png'
import * as styles from './banner.module.scss';



const Banner = ({welcomeMessage}) => (
    <section className={styles.container}>
        <div className={styles.imageMobile} >
            <img src={design} alt='design' loading='lazy' className={styles.boxDesignMobile} height={74}/>
            <img src={Person} alt='person' className={`${styles.bannerPerson} ${styles.bannerPersonMobile}`}/>

        </div>
        <div className={styles.welcome}>
            <p>Hi, Welcome!<br />
                <span>
                    {welcomeMessage}
                </span>
            </p>
            <button>Book an Appointment</button>
        </div>
        <div className={styles.imageContainer} >
            <img src={design} alt='design' loading='lazy' height={200} className={styles.boxDesign}/>
            <img src={Person} alt='person' className={styles.bannerPerson}/>
        </div>
    </section>
)

export default Banner;


Banner.defaultProps = {
    welcomeMessage: `Grade is good at explaining what I'm doing`
}
