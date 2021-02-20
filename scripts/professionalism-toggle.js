    //  Get choice from local storage
    let currentChoice = localStorage.getItem('professionalism');

    function rep(firstCall) {
      const professional = document.querySelectorAll('.professional');
      const casual = document.querySelectorAll('.casual');

      for (let i = 0; i < professional.length; i++) {
        // If the function is running without a click and we are trying to determine user choice from local storage
        if (firstCall) {
          if (currentChoice === 'professional' || !currentChoice) {
            break;
          } else if (currentChoice === 'casual') {
            professional[i].classList.add('hidden');
            casual[i].classList.remove('hidden');
          }
        } else {
          professional[i].classList.toggle('hidden');
          casual[i].classList.toggle('hidden');

          if (i === professional.length - 1) {
            if (currentChoice === 'professional' || !currentChoice) {
              currentChoice = 'casual';
              localStorage.setItem('professionalism', currentChoice);
            } else if (currentChoice === 'casual') {
              currentChoice = 'professional';
              localStorage.setItem('professionalism', currentChoice);
            }
          }
        }
      }
    }
    rep(true);
