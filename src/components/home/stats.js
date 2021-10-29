import React from "react";
import * as styles from './stats.module.scss';
import square from '../../images/square.svg';

const Stats = ({ data }) => (
    <section className={styles.container}>
        <img src={square} loading='lazy' alt={'square'} className={styles.topSquare}/>
        <div className={styles.statCardContainer}>
            {
                data?.map((item, ind) => <div className={styles.statCard} key={`stats_${ind}`}>
                    <p >{item?.node?.stat_value}</p>
                    <p >{item?.node?.title}</p>
                </div>)
            }
            <img src={square} loading='lazy' alt={'square'} className={styles.bottomSquare}/>

        </div>
    </section>
)

export default Stats;

Stats.defaultProps = {
    data: []
}
