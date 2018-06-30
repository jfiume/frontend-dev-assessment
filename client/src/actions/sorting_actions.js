export const SORTBYSTATUSASC = 'SORTBYSTATUSASC';
export const SORTBYSTATUSDEC = 'SORTBYSTATUSDEC';
export const SORTBYDATEASC = 'SORTBYDATEASC';
export const SORTBYDATEDEC = 'SORTBYDATEDEC';
export const RESETSTATUS = 'RESETSTATUS';
export const RESETDATE = 'RESETDATE';

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

export const resetStatus = () => ({
  type: RESETSTATUS
});

export const resetDate = () => ({
  type: RESETDATE
});
