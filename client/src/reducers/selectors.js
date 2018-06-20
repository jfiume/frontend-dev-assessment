export const filterReviewed = (candidates) => {
  const reviewed = Object.values(candidates).filter(candidate => candidate.reviewed);
  return reviewed;
}
