import * as CandidateUtil from '../util/candidate_util';

export const RECEIVE_CANDIDATES = 'RECEIVE_CANDIDATES';
export const RECEIVE_CANDIDATE = 'RECEIVE_CANDIDATE';
export const FILTER_BY_REVIEWED = 'FILTER_BY_REVIEWED';
export const START_LOADING_ALL_CANDIDATES = 'START_LOADING_ALL_CANDIDATES';
export const SORTED = 'SORTED';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export const receiveCandidates = candidates => ({
  type: RECEIVE_CANDIDATES,
  candidates
});

export const receiveCandidate = candidate => ({
  type: RECEIVE_CANDIDATE,
  candidate
})

export const filterByReviewed = () => ({
  type: FILTER_BY_REVIEWED,
});

export const sorting = () => ({
  type: SORTED,
});

export const callUpdateStatus = (id, status) => dispatch => {
  return (
    CandidateUtil.updateStatus(id, status).then(candidate => (
      dispatch(receiveCandidate(candidate))
    ))
  )
};

export const fetchCandidates = () => dispatch => {
  dispatch(startLoadingAllCandidates());
  return (
    CandidateUtil.fetchCandidates().then(candidates => (
      dispatch(receiveCandidates(candidates))
    ))
  )
};

export const startLoadingAllCandidates = () => ({
  type: START_LOADING_ALL_CANDIDATES
});
