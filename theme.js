
import { dark } from 'mdx-deck/themes';

export const theme = {
    ...dark,
    wrapper: {
        maxWidth: '90vw',
        margin: '0 auto'
    },
    googleFont: 'https://fonts.googleapis.com/css?family=Roboto:100,400,800',
    font: 'Roboto, sans-serif',
    a: {
        color: '#fff'
    },
    blockquote: {
        backgroundColor: 'rgba(128, 128, 128, 0.4)',
        borderLeft: '0.5em solid #393991',
        fontSize: '1.2em',
        fontWeight: '100',
        margin: '1em auto 2em auto',
        maxWidth: '90vw',
        padding: '0.5em',
        '&:after': {
            color: '#c3388d',
            content: 'attr(cite)',
            display: 'inline-block',
            fontSize: '0.8em',
            fontWeight: '400',
            paddingLeft: '0.8em',
            wordBreak: 'break-all'
        }
    },
    code: {
        fontSize: '0.5em'
    },
    table: {
        marginBottom: '1em'
    },
    td: {
        textAlign: 'center'
    },
    ul: {
        listStylePosition: 'inside'
    },
    ol: {
        listStylePosition: 'inside'
    }
}