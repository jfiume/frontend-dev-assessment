// filter selector
export const filterReviewed = (candidates) => {
  const reviewed = Object.values(candidates).filter(candidate => candidate.reviewed);
  return reviewed;
};

const statusHashAsc = {
  // accepted is on top,
  // pending is in the middle,
  // rejected is on bottom
  "accepted": -1,
  "pending": 0,
  "rejected": 1
};

const statusHashDec = {
  // accepted is on bottom,
  // pending is in the middle,
  // rejected is on top
  "accepted": 1,
  "pending": 0,
  "rejected": -1
};

function statusHashAscFun(a, b) {
  return statusHashAsc[a.status] - statusHashAsc[b.status];
};

function statusHashDecFun(a, b) {
  return statusHashDec[a.status] - statusHashDec[b.status];
};

function dateAscFun(a, b) {
  return a.date_applied > b.date_applied;
};

function dateDecFun(a, b) {
  return a.date_applied < b.date_applied;
};

// sorting selectors
export const sortStatusAsc = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHashAscFun(a, b);
  });
  return sorted;
};

export const sortStatusDec = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHashDecFun(a, b);
  });
  return sorted;
};

export const sortStatusAndDateAsc = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHashAscFun(a, b) || dateAscFun(a, b);
  });
  return sorted;
};

export const sortStatusAndDateDec = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHashDecFun(a, b) || dateDecFun(a, b);
  });
  return sorted;
};

export const sortStatusAscDateDec = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHashAscFun(a, b) || dateDecFun(a, b);
  });
  return sorted;
};

export const sortStatusDecDateAsc = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHashDecFun(a, b) || dateAscFun(a, b);
  });
  return sorted;
};

export const sortDateAsc = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return dateAscFun(a, b);
  });
  return sorted;
};

export const sortDateDec = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return dateDecFun(a, b);
  });
  return sorted;
};
