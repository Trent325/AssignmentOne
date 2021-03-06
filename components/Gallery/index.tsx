import style from "./Gallery.module.scss";
 
const Gallery: React.FC =() =>{
    return(
        <div>
            <div className={style.container}>
                <div className={style.gallery}>
                <a target="_blank" href="Image13.JPG">
                    <img src="Image13.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Family Dinner 1967</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image14.JPG">
                    <img src="Image14.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Chicken Nuggy</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image15.JPG">
                    <img src="Image15.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Exotic Sandwich</div>
                </div>
                

            </div>
            <div className={style.container}>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image4.JPG">
                    <img src="Image4.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Ice Cream Galore</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image5.JPG">
                    <img src="Image5.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Woofles</div>
                </div>
            </div>

            
           
            <div className={style.container}>
                <div className={style.gallery}>
                <a target="_blank" href="Image7.JPG">
                    <img src="Image7.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Wings n' Ranch</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image8.JPG">
                    <img src="Image8.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Loaded Burger</div>
                </div>
            
            </div>

            <div className={style.container}>
                <div className={style.gallery}>
                <a target="_blank" href="Image9.JPG">
                    <img src="Image9.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Nonna's Sauce</div>
                </div>
            </div>
            
            <div className={style.container}>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image10.JPG">
                    <img src="Image10.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Steak dinner</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image11.JPG">
                    <img src="Image11.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>pastries</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image6.JPG">
                    <img src="Image6.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>food truck food</div>
                </div>
            </div>
    
 
        </div>
 
    )
};
 
export default Gallery;