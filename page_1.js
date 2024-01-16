// Filename: page_1.js linked to filename index.html and other HTML files in this system folder //

    function next() {
        email = document.getElementById('mail').value;

        // Nested if statements //
        if (email == "jesusa.mercado@aphs.nsw.edu.au") { 
            // For client security //

            var unique = prompt("Enter unique key"); // User input of given unique key to client to confirm it is the client //
            var lower_unique = unique.toLowerCase();

            if (lower_unique == "37kxcq02") { // given only to client to access results //
                window.open("results.html"); // Direct the user (client) to results.html page //
            }

            else {
                location.href = "#"; // Reload user's page if he/she doesn't enter the correct pin as per client security purposes //
            }
        }

        else {
            // For school security //
            if (email.includes("@aphs.nsw.edu.au")) {

                window.open("./voting.html"); // Direct the user to voting.html if his/her email includes @aphs.nsw.edu.au //
            }

            else {
                alert("You must be an APHS student in order to vote for SRC members, this means that your email must include \"@aphs.nsw.edu.au\"");
                location.href = "#"; // Reload user's page and don't let him/her go to the next page if email doesn't include @aphs.nsw.edu.au //
            }
        }

    }