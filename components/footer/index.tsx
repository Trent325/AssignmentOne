import React, {useState} from 'react';
import style from './footer.module.scss';
 
const footer: React.FC =() =>{
    return(
        <div>
          <div className={style.Parent}>Copyright © 2017-2021 Food Hub. All Rights Reserved.</div>
        </div>
    )
};
export default footer;
