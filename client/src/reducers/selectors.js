export const filterReviewed = (candidates) => {
  const reviewed = Object.values(candidates).filter(candidate => candidate.reviewed);
  return reviewed;
};

export const sortedFunct = (candidates) => {
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
    // sorts by status 1st, then it sorts by date_applied: easrliest comes 1st
    return statusHash[a.status] - statusHash[b.status] || a.date_applied > b.date_applied;
  });
  return sorted;
};
