export const DEFAULTLANG = 'DEFAULTLANG';
export const CURRENTLANG = 'CURRENTLANG';
export const SETLANG = 'SETLANG';

export const changeLang = lang => dispatch => dispatch(({ type: SETLANG, lang }));
