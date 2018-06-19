import * as CandidateUtil from '../util/candidate_util';

export const RECEIVE_CANDIDATES = 'RECEIVE_CANDIDATES';
export const START_LOADING_ALL_CANDIDATES = 'START_LOADING_ALL_CANDIDATES';

export const receiveCandidates = candidates => ({
  type: RECEIVE_CANDIDATES,
  candidates
});

export const fetchCandidates = () => dispatch => {
  dispatch(startLoadingAllCandidates());
  return (
    CandidateUtil.fetchCandidates().then(candidates =>(
      dispatch(receiveCandidates(candidates))
    ))
  )
};

export const startLoadingAllCandidates = () => ({
  type: START_LOADING_ALL_CANDIDATES
});
