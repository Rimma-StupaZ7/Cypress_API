/*Cypress.Commands.add(
    "addUser", (id, username, firstName, lastName, email, password, phone) => 
    {
      cy.request('POST', '/v2/user/',
       {
          id: id,
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phone: phone,
          userStatus: 0,
        })
    }).then((response) => {
        expect(response.status).be.eql(200);
        expect(response.body).be.eqls(
        {

                id: id,
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                phone: phone,
                userStatus: 0,
        })        
    });*/
