import * as CanidateUtil from '../util/candidate_util';

export const RECEIVE_CANIDATES = 'RECEIVE_CANIDATES';

export const receiveCanidates = candidates => ({
  type: RECEIVE_CANIDATES,
  candidates
});

export const fetchCanidates = () => dispatch => (
  CanidateUtil.fetchCanidates().then(candidates =>(
    dispatch(receiveCanidates(candidates))
  ))
);
