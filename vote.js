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


// After pressing the "let's vote" button as an event listener //
function move() {
    document.getElementById("instr").style.display = "none"; // disappear instructions //
    document.getElementById("instruction").style.display = "none";
    document.getElementById("container").style.display = "block"; // display first container //
    document.getElementById("member1").style.display = "block"; // display "next member" button as id of "member1"
    document.getElementById('move').style.display = "none"; // disappear the "let's vote" button
    document.getElementById('icon1').style.display = "block"; // display the right-sided arrow from HTML //
    // display the left-sided arrow from HTML //

}

    

// var entries;
// After pressing the "next member" button as an event listener //
function member1() {
    var one = document.getElementById('one');
    var two = document.getElementById('two'); 
    var three = document.getElementById('three');
    var four = document.getElementById('four'); 
    var five = document.getElementById('five');
    var none = document.getElementById("NA");
  
    if (one.checked == true || two.checked == true || three.checked == true || four.checked == true || five.checked == true || none.checked == true) {
        document.getElementById('container').style.display = "none";
        document.getElementById('container_1').style.display = "block";
        document.getElementById('member1').style.display = "none";
        document.getElementById('member2').style.display = "block";
        document.getElementById('icon2').style.display = "block";
        // document.getElementById('icon_2').style.display = "block";
  
        const currentEmail = localStorage.getItem("email")
        storeVote(currentEmail, "member1", document.querySelector('input[name="radio"]:checked').value)
  
    } else {
        alert("Please select any one preference to go to next member");
    }
  
    // code for radio button validation //
    if (document.getElementById('one').checked){
      document.getElementById("one1").disabled = true;
      document.getElementById('one2').disabled = true;
      document.getElementById('one3').disabled = true;
      document.getElementById('one4').disabled = true;
      document.getElementById('one5').disabled = true;
    } 
    
    
    if (document.getElementById('two').checked) {
      document.getElementById("two1").disabled = true;
      document.getElementById('two2').disabled = true;
      document.getElementById('two3').disabled = true;
      document.getElementById('two4').disabled = true;
      document.getElementById('two5').disabled = true;
    }
    
    
    if (document.getElementById('three').checked) {
      document.getElementById("three1").disabled = true;
      document.getElementById('three2').disabled = true;
      document.getElementById('three3').disabled = true;
      document.getElementById('three4').disabled = true;
      document.getElementById('three5').disabled = true;
    }
    
    
    if (document.getElementById('four').checked) {
      document.getElementById("four1").disabled = true;
      document.getElementById('four2').disabled = true;
      document.getElementById('four3').disabled = true;
      document.getElementById('four4').disabled = true;
      document.getElementById('four5').disabled = true;
    }

    
    if (document.getElementById('five').checked) {
      document.getElementById("five1").disabled = true;
      document.getElementById('five2').disabled = true;
      document.getElementById('five3').disabled = true;
      document.getElementById('five4').disabled = true;
      document.getElementById('five5').disabled = true;
    }
    
  
    if (document.getElementById('NA').checked) {
      document.getElementById("NA2").disabled = true;
      document.getElementById('NA3').disabled = true;
      document.getElementById('NA4').disabled = true;
      document.getElementById('NA5').disabled = true;
      document.getElementById('NA6').disabled = true;
    }
    
  }
  
  
  function member2() {
    var one2 = document.getElementById('one1'); 
    var two2 = document.getElementById('two1'); 
    var three2 = document.getElementById('three1');
    var four2 = document.getElementById('four1'); 
    var five2 = document.getElementById('five1');
    var none2 = document.getElementById("NA2");
  
    if (one2.checked == true || two2.checked == true || three2.checked == true || four2.checked == true || five2.checked == true || none2.checked == true) {
        document.getElementById('member2').style.display = "none";
        document.getElementById('container_1').style.display = "none";
        document.getElementById('container_2').style.display = "block";
        document.getElementById('member3').style.display = "block";
        document.getElementById('icon3').style.display = "block";
        
        // store this radio button selected by the user for this SRC member //
        const currentEmail = localStorage.getItem("email")
        storeVote(currentEmail, "member2", document.querySelector('input[name="radio1"]:checked').value)
        
    } else {
        alert("Please select any one preference to go to next member");
    }


    if (document.getElementById('one1').checked){
      document.getElementById("one").disabled = true;
      document.getElementById('one2').disabled = true;
      document.getElementById('one3').disabled = true;
      document.getElementById('one4').disabled = true;
      document.getElementById('one5').disabled = true;
    } 
    
    
    if (document.getElementById('two1').checked) {
      document.getElementById("two").disabled = true;
      document.getElementById('two2').disabled = true;
      document.getElementById('two3').disabled = true;
      document.getElementById('two4').disabled = true;
      document.getElementById('two5').disabled = true;
    }
    
    
    if (document.getElementById('three1').checked) {
      document.getElementById("three").disabled = true;
      document.getElementById('three2').disabled = true;
      document.getElementById('three3').disabled = true;
      document.getElementById('three4').disabled = true;
      document.getElementById('three5').disabled = true;
    }
    
    
    if (document.getElementById('four1').checked) {
      document.getElementById("four").disabled = true;
      document.getElementById('four2').disabled = true;
      document.getElementById('four3').disabled = true;
      document.getElementById('four4').disabled = true;
      document.getElementById('four5').disabled = true;
    }
    
    
    if (document.getElementById('five1').checked) {
      document.getElementById("five").disabled = true;
      document.getElementById('five2').disabled = true;
      document.getElementById('five3').disabled = true;
      document.getElementById('five4').disabled = true;
      document.getElementById('five5').disabled = true;
    }

  
    if (document.getElementById('NA2').checked) {
      document.getElementById("NA").disabled = true;
      document.getElementById('NA3').disabled = true;
      document.getElementById('NA4').disabled = true;
      document.getElementById('NA5').disabled = true;
      document.getElementById('NA6').disabled = true;
    }
  
  };
  
  function member3() {
    var one3 = document.getElementById('one1'); 
    var two3 = document.getElementById('two1'); 
    var three3 = document.getElementById('three1');
    var four3 = document.getElementById('four1'); 
    var five3 = document.getElementById('five1');
    var none3 = document.getElementById("NA2");
  
    if (one3.checked == true || two3.checked == true || three3.checked == true || four3.checked == true || five3.checked == true || none3.checked == true) {
        document.getElementById('member3').style.display = "none";
        document.getElementById('container_2').style.display = "none";
        document.getElementById('container_3').style.display = "block";
        document.getElementById('member4').style.display = "block";
        document.getElementById('icon4').style.display = "block";
        
        
        const currentEmail = localStorage.getItem("email")
        storeVote(currentEmail, "member3", document.querySelector('input[name="radio2"]:checked').value)
        
    } else {
        alert("Please select any one preference to go to next member");
    }

    // code for radio button selection validation //
    if (document.getElementById('one2').checked){
      document.getElementById("one").disabled = true;
      document.getElementById('one1').disabled = true;
      document.getElementById('one3').disabled = true;
      document.getElementById('one4').disabled = true;
      document.getElementById('one5').disabled = true;
    } 
    
    
    if (document.getElementById('two2').checked) {
      document.getElementById("two").disabled = true;
      document.getElementById('two1').disabled = true;
      document.getElementById('two3').disabled = true;
      document.getElementById('two4').disabled = true;
      document.getElementById('two5').disabled = true;
    }
    
    
    if (document.getElementById('three2').checked) {
      document.getElementById("three").disabled = true;
      document.getElementById('three1').disabled = true;
      document.getElementById('three3').disabled = true;
      document.getElementById('three4').disabled = true;
      document.getElementById('three5').disabled = true;
    }
    
    
    if (document.getElementById('four2').checked) {
      document.getElementById("four").disabled = true;
      document.getElementById('four1').disabled = true;
      document.getElementById('four3').disabled = true;
      document.getElementById('four4').disabled = true;
      document.getElementById('four5').disabled = true;
    }
    
    
    if (document.getElementById('five2').checked) {
      document.getElementById("five").disabled = true;
      document.getElementById('five1').disabled = true;
      document.getElementById('five3').disabled = true;
      document.getElementById('five4').disabled = true;
      document.getElementById('five5').disabled = true;
    }
    
  
    if (document.getElementById('NA3').checked) {
      document.getElementById("NA").disabled = true;
      document.getElementById('NA2').disabled = true;
      document.getElementById('NA4').disabled = true;
      document.getElementById('NA5').disabled = true;
      document.getElementById('NA6').disabled = true;
    }
  
  }
  
  function member4() {
    var one4 = document.getElementById('one3'); 
    var two4 = document.getElementById('two3'); 
    var three4 = document.getElementById('three3');
    var four4 = document.getElementById('four3'); 
    var five4 = document.getElementById('five3');
    var none4 = document.getElementById("NA4");
  
    if (one4.checked == true || two4.checked == true || three4.checked == true || four4.checked == true || five4.checked == true || none4.checked == true) {
        document.getElementById('member4').style.display = "none";
        document.getElementById('container_3').style.display = "none";
        document.getElementById('container_4').style.display = "block";
        document.getElementById('member5').style.display = "block";
        document.getElementById('member_5').style.display = "block";
        document.getElementById('icon5').style.display = "block";
        
        const currentEmail = localStorage.getItem("email")
        storeVote(currentEmail, "member4", document.querySelector('input[name="radio3"]:checked').value)
        
    } else {
        alert("Please select any one preference to go to next member");
    }
  
    // // var selection_4 = document.getElementsByName('radio3');
  
    // // For localStorage //
    // for (let i = 0; i < selection_4.length; i++) {
    //     if (selection_4[i].checked) {
    //         localStorage.setItem("preference4", selection_4[i].value);
    //     }
    // }
  
    if (document.getElementById('one3').checked){
      document.getElementById("one").disabled = true;
      document.getElementById('one1').disabled = true;
      document.getElementById('one2').disabled = true;
      document.getElementById('one4').disabled = true;
      document.getElementById('one5').disabled = true;
    } 
    
    
    if (document.getElementById('two3').checked) {
      document.getElementById("two").disabled = true;
      document.getElementById('two1').disabled = true;
      document.getElementById('two2').disabled = true;
      document.getElementById('two4').disabled = true;
      document.getElementById('two5').disabled = true;
    }
    
    
    if (document.getElementById('three3').checked) {
      document.getElementById("three").disabled = true;
      document.getElementById('three1').disabled = true;
      document.getElementById('three2').disabled = true;
      document.getElementById('three4').disabled = true;
      document.getElementById('three5').disabled = true;
    }
    
    
    if (document.getElementById('four3').checked) {
      document.getElementById("four").disabled = true;
      document.getElementById('four1').disabled = true;
      document.getElementById('four2').disabled = true;
      document.getElementById('four4').disabled = true;
      document.getElementById('four5').disabled = true;
    }
    
    
    if (document.getElementById('five3').checked) {
      document.getElementById("five").disabled = true;
      document.getElementById('five1').disabled = true;
      document.getElementById('five2').disabled = true;
      document.getElementById('five4').disabled = true;
      document.getElementById('five5').disabled = true;
    }
    
  
    if (document.getElementById('NA4').checked) {
      document.getElementById("NA").disabled = true;
      document.getElementById('NA2').disabled = true;
      document.getElementById('NA3').disabled = true;
      document.getElementById('NA5').disabled = true;
      document.getElementById('NA6').disabled = true;
    }

    
  }
  
  function member5() {
    var one5 = document.getElementById('one4'); 
    var two5 = document.getElementById('two4'); 
    var three5 = document.getElementById('three4');
    var four5 = document.getElementById('four4'); 
    var five5 = document.getElementById('five4');
    var none5 = document.getElementById("NA5");
  
    if (one5.checked == true || two5.checked == true || three5.checked == true || four5.checked == true || five5.checked == true || none5.checked == true) {
        document.getElementById('member5').style.display = "none";
        document.getElementById('container_4').style.display = "none";
        document.getElementById('container_5').style.display = "block";
        document.getElementById('member_5').style.display = "none";
        document.getElementById('finish-off').style.display = "block";
        document.getElementById('finish').style.display = "block";
        
        const currentEmail = localStorage.getItem("email")
        storeVote(currentEmail, "member5", document.querySelector('input[name="radio4"]:checked').value)

    } else {
        alert("Please select any one preference to go to next member");
    }
  
    // var selection_5 = document.getElementsByName('radio4');
  
    // // For localStorage for vote for Lucrecia //
    // for (let i = 0; i < selection_5.length; i++) {
    //     if (selection_5[i].checked) {
    //         localStorage.setItem("preference5", selection_5[i].value);
    //     }
    // }
  
    if (document.getElementById('one4').checked){
      document.getElementById("one1").disabled = true;
      document.getElementById('one2').disabled = true;
      document.getElementById('one3').disabled = true;
      document.getElementById('one').disabled = true;
      document.getElementById('one5').disabled = true;
    }
    

    if (document.getElementById('two4').checked) {
      document.getElementById("two1").disabled = true;
      document.getElementById('two2').disabled = true;
      document.getElementById('two3').disabled = true;
      document.getElementById('two').disabled = true;
      document.getElementById('two5').disabled = true;
    }
    
    
    if (document.getElementById('three4').checked) {
      document.getElementById("three1").disabled = true;
      document.getElementById('three2').disabled = true;
      document.getElementById('three3').disabled = true;
      document.getElementById('three').disabled = true;
      document.getElementById('three5').disabled = true;
    }
    
    
    if (document.getElementById('four4').checked) {
      document.getElementById("four1").disabled = true;
      document.getElementById('four2').disabled = true;
      document.getElementById('four3').disabled = true;
      document.getElementById('four').disabled = true;
      document.getElementById('four5').disabled = true;
    }
    
    
    if (document.getElementById('five4').checked) {
      document.getElementById("five1").disabled = true;
      document.getElementById('five2').disabled = true;
      document.getElementById('five3').disabled = true;
      document.getElementById('five').disabled = true;
      document.getElementById('five5').disabled = true;
    }
    
  
    if (document.getElementById('NA5').checked) {
      document.getElementById("NA").disabled = true;
      document.getElementById('NA2').disabled = true;
      document.getElementById('NA3').disabled = true;
      document.getElementById('NA4').disabled = true;
      document.getElementById('NA6').disabled = true;
    }
      
  }
  
  function done() {
    
  
    // var selection_6 = document.getElementsByName('radio5');
  
    //       // For localStorage for vote of Mouna //
    //       for (let i = 0; i < selection_6.length; i++) {
  
    //         if (selection_6[i].checked) {
    //           localStorage.setItem("preference6", selection_6[i].value);
    //         }
    //       }
          
          if (document.getElementById('one5').checked){
            document.getElementById("one1").disabled = true;
            document.getElementById('one2').disabled = true;
            document.getElementById('one3').disabled = true;
            document.getElementById('one4').disabled = true;
            document.getElementById('one').disabled = true;
          } 
          
          
          if (document.getElementById('two4').checked) {
            document.getElementById("two1").disabled = true;
            document.getElementById('two2').disabled = true;
            document.getElementById('two3').disabled = true;
            document.getElementById('two4').disabled = true;
            document.getElementById('two').disabled = true;
          }
          
          
          if (document.getElementById('three4').checked) {
            document.getElementById("three1").disabled = true;
            document.getElementById('three2').disabled = true;
            document.getElementById('three3').disabled = true;
            document.getElementById('three4').disabled = true;
            document.getElementById('three').disabled = true;
          }
          
          
          if (document.getElementById('four4').checked) {
            document.getElementById("four1").disabled = true;
            document.getElementById('four2').disabled = true;
            document.getElementById('four3').disabled = true;
            document.getElementById('four4').disabled = true;
            document.getElementById('four').disabled = true;
          }
          
          
          if (document.getElementById('five4').checked) {
            document.getElementById("five1").disabled = true;
            document.getElementById('five2').disabled = true;
            document.getElementById('five3').disabled = true;
            document.getElementById('five4').disabled = true;
            document.getElementById('five').disabled = true;
          }
          
  
          if (document.getElementById('NA6').checked) {
            document.getElementById("NA").disabled = true;
            document.getElementById('NA2').disabled = true;
            document.getElementById('NA3').disabled = true;
            document.getElementById('NA4').disabled = true;
            document.getElementById('NA5').disabled = true;
          }
  
          location.href = "thanks.html";

          const currentEmail = localStorage.getItem("email")
          storeVote(currentEmail, "finish", document.querySelector('input[name="radio5"]:checked').value)
  }

  // END OF FILE vote.js //
