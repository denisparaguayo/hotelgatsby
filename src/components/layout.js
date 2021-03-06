import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-Helmet';
import Header from './header';

const Layout = (props) => {
    return (
        <>
            <Global

                styles={css`

                html {
                    font-size: 62.5%;

                }
                body {
                    font-size: 18px;
                    font-size: 1.8rem;
                    line-height: 1.5;
                    font-family: 'PT Sans', sans-serif;

                   }
                h1, h2{
                    font-family: 'Roboto', serif;
                }
                h1, h2, h3{
                    margin: 0;
                    line-height: 1.5
                }
                h3 {
                    font-family: 'PT Sans', sans-serif;
                }
                ul{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                } 
                `}

            />

            <Helmet>
                <title>Gatsby Asunción</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header />

            {props.children}
        </>
    );
}

export default Layout;