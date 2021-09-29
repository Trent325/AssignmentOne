import style from './Titleblock.module.scss'; //imports style from this location 
 
const Im_Header: React.FC =() =>{ 


    return(
        <div>
            <div className = {style.container}>
                <h1>Image Gallery</h1>
            </div>
        </div>
        
    )  
};

export default Im_Header;
