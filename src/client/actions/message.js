export const ALERT = 'ALERT';
export const ERROR = 'DANGER';
export const SUCCESS = 'SUCCESS';

export const alert = (header, label, status) => ({ type: ALERT, header, label, status });

