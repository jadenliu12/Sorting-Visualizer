const initModeState = {
    mode: 'light',
    text: '#707070',
    active_text: '#FFFFFF',
    bkg: '#FFFFFF',
    active_bkg: '#707070',
    border: '#707070',
    active_border: '#FFFFFF',
    slider: '#dadae5',
    color_condition: 'rgb(255, 255, 255)'
}

export function mode(state = initModeState, action) {
    switch (action.type) {
        case '@MODE/SET_TO_LIGHT':       
            return {
                mode: 'light',
                text: '#707070',
                active_text: '#FFFFFF',
                bkg: '#FFFFFF',
                active_bkg: '#707070',
                border: '#707070',
                active_border: '#FFFFFF',
                slider: '#dadae5',
                color_condition: 'rgb(255, 255, 255)'
            };
        case '@MODE/SET_TO_DARK':       
            return {
                mode: 'dark',
                text: '#FFFFFF',
                active_text: '#707070',
                bkg: '#707070',
                active_bkg: '#FFFFFF',
                border: '#FFFFFF',
                active_border: '#707070',
                slider: '#5a5a5e',
                color_condition: 'rgb(112, 112, 112)'
            };                           
        default:
            return state;        
    }
}