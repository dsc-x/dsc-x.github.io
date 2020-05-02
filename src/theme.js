import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides:
    {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      },
        'palette': {
          'common': {
            'black': "#000",
            'white': "#fff"
          },
          'background': {
            'paper': "#fff",
            'default': "#fafafa"
          },
          'primary': {
            'light': "rgba(232, 240, 254, 1)",
            'main': "rgba(26, 115, 232, 1)",
            'dark': "rgba(23, 78, 166, 1)",
            'contrastText': "#fff"
          },
          'secondary': {
            'light': "rgba(252, 232, 230, 1)",
            'main': "rgba(217, 48, 37, 1)",
            'dark': "rgba(165, 14, 14, 1)",
            'contrastText': "#fff"
          },
          'error': {
            'light': "#e57373",
            'main': "#f44336",
            'dark': "#d32f2f",
            'contrastText': "#fff"
          },
          'text': {
            'primary': "rgba(0, 0, 0, 0.87)",
            'secondary': "rgba(0, 0, 0, 0.54)",
            'disabled': "rgba(0, 0, 0, 0.38)",
            'hint': "rgba(0, 0, 0, 0.38)"
          }
        }
    }
});

export default theme;