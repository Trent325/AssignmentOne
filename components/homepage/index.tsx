import React, {useState} from 'react';
import style from './HomePageIntro.module.scss';
 
const HomePageIntro: React.FC =() =>{
    return(
        <div>
            <div className={style.ImageContainer}>
                <div className={style.ImageTextContainer}>
                    <div className={style.title1}>
                            Food Hub
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default HomePageIntro;
