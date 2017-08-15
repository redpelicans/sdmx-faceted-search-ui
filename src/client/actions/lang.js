export const DEFAULTLANG = 'DEFAULTLANG';
export const CURRENTLANG = 'CURRENTLANG';
export const CHANGELANG = 'CHANGELANG';

export const changeLang = lang => dispatch => dispatch(({ type: CHANGELANG, lang }));
