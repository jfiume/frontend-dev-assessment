// Asynchronously fetch me all candidates
export const fetchCandidates = async function() {
  try {
    const response = await fetch("/candidates/");
    const candidates = await response.json();
    return candidates;
  } catch (e) {
    console.error("API request raised an error:", e);
  }
};

// Update a candidates' status with a PATCH request
export const updateStatus = async function(id, status) {
  try {
    const settings = {
      method: 'PATCH',
      body: JSON.stringify(status),
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
    };
    const response = await fetch(`/candidates/${id}/`, settings);
    const candidate = await response.json();
    return candidate;
  } catch (e) {
    console.error("API request raised an error:", e);
  }
};
