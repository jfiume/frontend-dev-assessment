import * as CandidateUtil from '../util/candidate_util';

export const RECEIVE_CANDIDATES = 'RECEIVE_CANDIDATES';
export const RECEIVE_CANDIDATE = 'RECEIVE_CANDIDATE';
export const FILTER_BY_REVIEWED = 'FILTER_BY_REVIEWED';
export const START_LOADING_ALL_CANDIDATES = 'START_LOADING_ALL_CANDIDATES';

export const receiveCandidates = candidates => ({
  type: RECEIVE_CANDIDATES,
  candidates
});

export const receiveCandidate = candidate => ({
  type: RECEIVE_CANDIDATE,
  candidate
});

export const filterByReviewed = () => ({
  type: FILTER_BY_REVIEWED,
});

export const startLoadingAllCandidates = () => ({
  type: START_LOADING_ALL_CANDIDATES
});

export const callUpdateStatus = (id, status) => dispatch => {
  return (
    CandidateUtil.updateStatus(id, status).then(candidate => (
      dispatch(receiveCandidate(candidate))
    ))
  );
};

export const fetchCandidates = () => dispatch => {
  // Signal that we are starting our async call
  dispatch(startLoadingAllCandidates());
  return (
    CandidateUtil.fetchCandidates().then(candidates => (
      dispatch(receiveCandidates(candidates))
    ))
  );
};
