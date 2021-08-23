const themes = [
    {
        name: 'light',
        appBackgroundColor: '#f5f8f9',
        nav: {
            fontWeight: 'normal',
            color: '#acb5be',
            textTransform: null,
            backgroundColor: '#fff',
        },
        button: {
            borderRadius: '8px',
            fontWeight: 'normal',
            primary: {
                backgroundColor: '#534EFF',
                hover: '#332DE7',
                color: '#fff',
            },
            secondary: {
                backgroundColor: '#fff',
                color: '#adb3b9',
            },
        },
        labelColor: '#161616',
        inputText: {
            backgroundColor: '#fff',
            color: '#adb3b9',
        },
    },
    {
        name: 'dark',
        appBackgroundColor: '#090910',
        nav: {
            fontWeight: 'normal',
            color: '#46486F',
            backgroundColor: '#17182B',
        },
        button: {
            borderRadius: null,
            fontFamily: null,
            fontWeight: null,
            textTransform: null,
            primary: {
                backgroundColor: '#003AF8',
                hover: '#00238E',
                color: '#fff',
            },
            secondary: {
                backgroundColor: '#17182B',
                color: null,
            },
        },
        labelColor: '#fff',
        inputText: {
            backgroundColor: null,
            color: null,
        },
    },
]

export default themes;