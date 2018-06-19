export const fetchCanidates = () => (
  $.ajax({
    method: 'GET',
    url: '/candidates'
  })
);
