
import { dark } from 'mdx-deck/themes';

export const theme = {
    ...dark,
    googleFont: 'https://fonts.googleapis.com/css?family=Roboto:100,400,800',
    font: 'Roboto, sans-serif',
    css : {
        ...dark.css,
        a: {
            color: '#fff'
        },
        blockquote: {
            backgroundColor: 'rgba(128, 128, 128, 0.4)',
            borderLeft: '0.5em solid #9a86fd',
            fontSize: '1.2em',
            fontWeight: '100',
            margin: '1em auto 2em auto',
            maxWidth: '90vw',
            padding: '0.5em',
            '&:after': {
                color: '#f39',
                content: 'attr(cite)',
                display: 'inline-block',
                fontSize: '0.8em',
                fontWeight: '400',
                paddingLeft: '0.8em',
                wordBreak: 'break-all'
            }
        },
        strong : {
            color :'#f39'
        }
    },
    ul: {
        listStylePosition: 'inside'
    },
    ol: {
        listStylePosition: 'inside'
    },
    h1: {
        color: '#f39',
    },
    h2: {
        color: '#f39',
    },
    h3 : {
        color: '#9a86fd',
    }
}