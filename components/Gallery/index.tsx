import style from "./Gallery.module.scss";
 
const Gallery: React.FC =() =>{
    return(
        <div>
            <div className={style.container}>
                <div className={style.gallery}>
                <a target="_blank" href="Image1.JPG">
                    <img src="Image1.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Double Rainbow</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image2.JPG">
                    <img src="Image2.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Trees and a Path</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image3.JPG">
                    <img src="Image3.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>Sunset tree</div>
                </div>
                

            </div>
            <div className={style.container}>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image4.JPG">
                    <img src="Image4.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>cool flowers</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image5.JPG">
                    <img src="Image5.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>now a butterfly</div>
                </div>
            </div>

            
           
            <div className={style.container}>
                <div className={style.gallery}>
                <a target="_blank" href="Image7.JPG">
                    <img src="Image7.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>a sunflower</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image8.JPG">
                    <img src="Image8.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>ocean sunrise</div>
                </div>
            
            </div>

            <div className={style.container}>
                <div className={style.gallery}>
                <a target="_blank" href="Image9.JPG">
                    <img src="Image9.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>catapilar</div>
                </div>
            </div>
            
            <div className={style.container}>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image10.JPG">
                    <img src="Image10.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>frog</div>
                </div>
    
                <div className={style.gallery}>
                <a target="_blank" href="Image11.JPG">
                    <img src="Image11.JPG" alt="Cinque Terre" width="600" height="400"></img>
                </a>
                <div className={style.caption}>lake</div>
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