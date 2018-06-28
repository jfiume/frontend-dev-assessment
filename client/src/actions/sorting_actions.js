export const SORTBYSTATUSASC = 'SORTBYSTATUSASC';
export const SORTBYSTATUSDEC = 'SORTBYSTATUSDEC';
export const SORTBYDATEASC = 'SORTBYDATEASC';
export const SORTBYDATEDEC = 'SORTBYDATEDEC';

export const sortByStatusAsc = sortByStatusAsc => ({
  type: SORTBYSTATUSASC,
  sortByStatusAsc
});

export const sortByStatusDec = sortByStatusDec => ({
  type: SORTBYSTATUSDEC,
  sortByStatusDec
});

export const sortByDateAsc = sortByDateAsc => ({
  type: SORTBYDATEASC,
  sortByDateAsc
});

export const sortByDateDec = sortByDateDec => ({
  type: SORTBYDATEDEC,
  sortByDateDec
});
