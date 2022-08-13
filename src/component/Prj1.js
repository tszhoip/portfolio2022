import React from 'react';
import styled from 'styled-components';
import { Gallery, Item } from 'react-photoswipe-gallery';
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

const ImageGallery = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    background-color: green;
        @media (min-width: 600px) and (max-width: 1023px) {
            grid-template-columns: repeat(2, auto);
        }
        @media (min-width: 200px) and (max-width: 599px) {
            grid-template-columns: repeat(1, auto);
        }
`
const ImgGrid = styled.img`
object-fit: ${props => props.objfit};
`
const Prj1 = (props) => {
    const hasImages = Array.isArray(props.images)
    const smallItemStyles = {
        cursor: "pointer",
        objectFit: "contain",
        width: "100%",
        maxHeight: "100%"
      };

    return (
        <ImageGallery>

        {hasImages && 
            
            <Gallery
            id="simple-gallery"
            options={{
              closeOnScroll: false,
              shareEl: false,
              arrowPrevTitle: "asd",
              fullscreenEl: (props) => (
                <span {...props} style={{ color: "red" }}>
                  f
                </span>
              )
            }}
            >
                
                {props.images.map((imageUrl, index) => <Item
                    key={index}
                    original={imageUrl}
                    thumbnail={imageUrl}
                    width="1600"
                    height="1600"
                >
                    {({ ref, open }) => (
                        <ImgGrid ref={ref} onClick={open} src={imageUrl} style={smallItemStyles}/>
                    )}
                </Item>)}
               
            </Gallery>
     
        }  
       </ImageGallery> 
    )
}

export default Prj1;