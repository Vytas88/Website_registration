/*1. Validate if email is correct format
2. Validate if password is long enough, includes upper and lower case letters and at least one number</li>
3. Check if user is not taken(persist previous user registrations and compare)
4. If user was created successfully - add it to the object of users.Example: [ id: { ...userInfo } ]
*/

      var usersList = [];

      document.getElementById("register_button").addEventListener("click", function(){

      var obj = {
      username:document.getElementById("username").value,
      email:document.getElementById("email").value,
      password:document.getElementById("password").value
      };
      console.log(document.getElementById("username").value)
      if(myFunction(document.getElementById("username").value)) { //turi buti pries pushinima
      alert('This user is taken')
    } else {
      usersList.push(obj);

      let output = document.getElementById("output");
      var goodColor = "#66cc66";
      var badColor = "#ff6666";

      //1. Validate if email is correct format

      var checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email);
      console.log(checkEmail);

      var par1 = document.createElement("li");
      var par2 = document.createElement("li");
      var par3 = document.createElement("li");
      var par4 = document.createElement("li");
      var par5 = document.createElement("li");
      // var par6 = document.createElement("li");
      par1.textContent = checkEmail;
      par2.textContent = obj.password;
      par3.textContent = obj.password;
      par4.textContent = obj.password;
      par5.textContent = obj.password;
      // par6.textContent = username;
      output.appendChild(par1);
      output.appendChild(par2);
      output.appendChild(par3);
      output.appendChild(par4);
      output.appendChild(par5);
      // output.appendChild(par6);

      if (checkEmail) {
        par1.style.backgroundColor = goodColor;
        par1.style.color = "white";
        par1.textContent = 'OK, your email is correct format';
      } else {
        par1.style.backgroundColor = badColor;
        par1.style.color = "white";
        par1.textContent = 'Sorry, your email is NOT correct format';
      }

      // 2. Validate if password is long enough, includes upper and lower case letters and at least one number.

      if (obj.password.length > 5) {
        par2.style.backgroundColor = goodColor;
        par2.style.color = "white";
        par2.textContent = "Number of Password characters is ok!"
      } else {
        par2.style.backgroundColor = badColor;
        par2.style.color = "white";
        par2.textContent = "You have to enter at least 6 characters to Password!";
      }

      if (obj.password.search(/[a-z]/) == -1) {
        par3.style.backgroundColor = badColor;
        par3.style.color = "white";
        par3.textContent = "Your password NEEDS at least one LOWER case letter.";
      } else {
        par3.style.backgroundColor = goodColor;
        par3.style.color = "white";
        par3.textContent = "All right, your password has at least one LOWER case letter.";
      }

      if (obj.password.search(/[A-Z]/) == -1) {
        par4.style.backgroundColor = badColor;
        par4.style.color = "white";
        par4.textContent = "Your password NEEDS at least one UPPER case letter.";
      } else {
        par4.style.backgroundColor = goodColor;
        par4.style.color = "white";
        par4.textContent = "All right, your password has at least one UPPER case letter.";
      }

      if (obj.password.search(/[0-9]/) == -1) {
        par5.style.backgroundColor = badColor;
        par5.style.color = "white";
        par5.textContent = "Your password NEEDS at least one NUMBER.";
      } else {
        par5.style.backgroundColor = goodColor;
        par5.style.color = "white";
        par5.textContent = "All right, your password has at least one NUMBER.";
      }

    }

      //3,4 Check if user already exists, add to Object


  });

  function myFunction(username) {
    const isTaken = usersList.some(user => user.username == username);
    return isTaken;
  }


  // usersList['username'] = username;
  // usersList['email'] = email;
  // usersList['password'] = password;
  // function displayUserInfo() {
  //   for (var property in updatedList) {
  //     if (updatedList.hasOwnProperty(property)) {
  //       console.log(updatedList);
  //     }
  //   }
  // }

  // function displayUserInfo() {
  //   Object.keys(usersList).forEach(function(key) {
  //     console.log(key, usersList[key]);
  //   })
  // };
