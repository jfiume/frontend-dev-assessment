export const filterReviewed = (candidates) => {
  const reviewed = Object.values(candidates).filter(candidate => candidate.reviewed);
  return reviewed;
};

export const sortStatusAsc = (candidates) => {
  // accepted is on top,
  // pending is in the middle,
  // rejected is on bottom
  const statusHash = {
    "accepted": -1,
    "pending": 0,
    "rejected": 1
  };
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHash[a.status] - statusHash[b.status]
  });
  return sorted;
};

export const sortStatusDec = (candidates) => {
  // accepted is on bottom,
  // pending is in the middle,
  // rejected is on top
  const statusHash = {
    "accepted": 1,
    "pending": 0,
    "rejected": -1
  };
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHash[a.status] - statusHash[b.status]
  });
  return sorted;
};

export const sortStatusAndDateAsc = (candidates) => {
  // accepted is on top,
  // pending is in the middle,
  // rejected is on bottom
  const statusHash = {
    "accepted": -1,
    "pending": 0,
    "rejected": 1
  };
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHash[a.status] - statusHash[b.status] || a.date_applied > b.date_applied;
  });
  return sorted;
};

export const sortStatusAndDateDec = (candidates) => {
  // accepted is on bottom,
  // pending is in the middle,
  // rejected is on top
  const statusHash = {
    "accepted": 1,
    "pending": 0,
    "rejected": -1
  };
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHash[a.status] - statusHash[b.status] || a.date_applied < b.date_applied;
  });
  return sorted;
};

export const sortStatusAscDateDec = (candidates) => {
  // accepted is on top,
  // pending is in the middle,
  // rejected is on bottom
  const statusHash = {
    "accepted": -1,
    "pending": 0,
    "rejected": 1
  };
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHash[a.status] - statusHash[b.status] || a.date_applied < b.date_applied;
  });
  return sorted;
};

export const sortStatusDecDateAsc = (candidates) => {
  // accepted is on bottom,
  // pending is in the middle,
  // rejected is on top
  const statusHash = {
    "accepted": 1,
    "pending": 0,
    "rejected": -1
  };
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return statusHash[a.status] - statusHash[b.status] || a.date_applied > b.date_applied;
  });
  return sorted;
};

export const sortDateAsc = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return a.date_applied > b.date_applied;
  });
  return sorted;
};

export const sortDateDec = (candidates) => {
  const arr = Object.values(candidates);
  let sorted = arr.sort(function(a, b) {
    return a.date_applied < b.date_applied;
  });
  return sorted;
};
