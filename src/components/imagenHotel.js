import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'


const ImageBackground = styled(BackgroundImage)`
  height: 700px;
  
  `

const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34, 49, 63, .8), rgba(34, 49, 63, .8) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    h1{
        font-size: 4rem;
        margin: 0;
        @media (min-width: 992px){
            font-size: 5.8rem;
        }

        @media (max-width: 480px){
            font-size: 3rem;
            text-align: center;
        }
    }
    p{
        font-size: 2rem;
        @media (min-width: 992px){
            font-size: 2.5rem;
        }
        @media (max-width: 480px){
           
            text-align: center;
        }
    }

`;

const ImagenHotel = () => {
     
    const { image } = useStaticQuery(graphql`
    query{
        image: file(relativePath: { eq: "8.jpg" }){
        sharp: childImageSharp{
            fluid{
               ...GatsbyImageSharpFluid_withWebp
        }
      }
      }
    }
    `);

// console.log(image.sharp.fluid);
    return ( 
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadein="soft">
            <TextoImagen>
                <h1>Bienvenido al Hotel Asunción</h1>
                <p>El mejor Hotel de Paraguay para tus Vacaciones</p>
            </TextoImagen>            
        </ImageBackground>
     );
}
 
export default ImagenHotel;