// Filename: vote.js //

// Function to store all the values of the radio buttons selected by the user for all the SRC members //
function storeVote(email, pref, score) {
  const emailStore = JSON.parse(localStorage.getItem(email))
  emailStore[pref] = score;
  localStorage.setItem(email, JSON.stringify(emailStore))


  const parsed = JSON.parse(localStorage.getItem("emails"))
  parsed.forEach(element => {
    if (element.email === email) {
        element[pref] = score
    }
  });
  localStorage.setItem("emails", JSON.stringify(parsed))

}


