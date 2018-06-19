export const fetchCandidates = async function() {
  try {
    const response = await fetch("/candidates/");
    const candidates = await response.json();
    // console.log("Fetched candidates:", candidates);
    return candidates;
  } catch (e) {
    // console.error("API request raised an error:", e);
  }
}
