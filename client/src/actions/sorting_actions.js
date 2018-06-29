export const SORTBYSTATUSASC = 'SORTBYSTATUSASC';
export const SORTBYSTATUSDEC = 'SORTBYSTATUSDEC';
export const SORTBYDATEASC = 'SORTBYDATEASC';
export const SORTBYDATEDEC = 'SORTBYDATEDEC';

export const sortByStatusAsc = () => ({
  type: SORTBYSTATUSASC
});

export const sortByStatusDec = () => ({
  type: SORTBYSTATUSDEC
});

export const sortByDateAsc = () => ({
  type: SORTBYDATEASC
});

export const sortByDateDec = () => ({
  type: SORTBYDATEDEC
});
