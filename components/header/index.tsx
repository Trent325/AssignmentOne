import React, {useState} from 'react'; //need it in every component 
import style from './Header.module.scss'; //imports style from this location 
 
const Header: React.FC =() =>{ //created the header object 
 
    //Use useState to control the status of the header
    const [mobileShow, setMobileShow] = useState(false);
    /**
     * when you add className={style.whatever} you are referring to whatever you imported style as at this class
     * Use inspect element to check out all the divs
     * 
     * Header Parent is the entire header 
     * Flex Box is the container that holds all the fex boxes I made to lay out the header
     * boxCol is the rectangle surrounding each word on the header 
     * 
     * HeaderLogo wraps the image 
     * 
     * mobile button wraps the entire button
     * the hamlines (its a funny name lol) are ordered inside the button div
     * 
     * className mobileShow ? means if mobileShow is true do one if false do the other
     * 
     * href is a hyperlink
     * 
     * contentSpacer made it look nicer
     * 
     */
 
    return(
 
        <div>
 
            <div className={style.headerParent}> 
                <div className={style.FlexBox}> 
                        <div className = {style.boxCol}>
                            <div className ={style.HeaderLogo} >
                                <img src = "/Camera.jpg"></img>                          
                            </div>
                        </div>
                    <div className = {style.boxCol}>
                        <div className={style.mobileButton} onClick={() => setMobileShow(!mobileShow) }>
                            <div className={style.hamLine}></div>
                            <div className={style.hamLine}></div>
                            <div className={style.hamLine}></div>  
                        </div>
                </div>
                
                <div className={mobileShow ? style.HeaderButtonWrapperOpen : style.HeaderButtonWrapper}>
                    <a href = "/" className={style.HeaderButton}>
                        Home
                    </a>
                    <a href = "GalleryPage" className={style.HeaderButton}>
                        Images
                    </a>
                    
                    
                </div>
                
                </div>
            </div>
 
            <div className={style.headerContentSpacer}></div>
 
        </div>
            
            
 
           
   
    )
};
 
export default Header;
