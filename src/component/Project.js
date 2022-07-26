import React from 'react';
import styled from 'styled-components';
import Text1 from './Text1';
import { Gallery, Item } from 'react-photoswipe-gallery'

const ProjectContainer = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.bgcolor};
    color: ${props => props.color};
`
const ProjectInfo = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`
const ImageGallery = styled.div`
    width: calc(100% - 32px);
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 64px;
    grid-column-gap: 64px;
    padding: 16px;
    margin-bottom:50px; 
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

/*

props = {
    title: 'string',
    type: 'string',
    images: string[]
}

*/

const Project = (props) => {
    const hasImages = Array.isArray(props.images)


    return (
        <ProjectContainer bgcolor={props.bgcolor} color={props.color}>
            <ProjectInfo>
                <Text1 title={props.title} type={props.type}></Text1>
                {

                    hasImages && 
                    <ImageGallery>
                    <Gallery>
                        {props.images.map((imageUrl, index) => <Item
                            key={index}
                            original={imageUrl}
                            thumbnail={imageUrl}
                            width="1024"
                            height="768"
                        >
                            {({ ref, open }) => (
                                <ImgGrid ref={ref} onClick={open} src={imageUrl} objfit={props.objfit}/>
                            )}
                        </Item>)}
                    </Gallery>
              </ImageGallery>
                }
              
            </ProjectInfo>
           
        </ProjectContainer>
    )
}

export default Project;