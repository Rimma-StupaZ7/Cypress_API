describe("PetStore api, user", () => {
  const id = 789;
  const username = "username1";
  const firstName = "firstName1";
  const lastName = "lastName1";
  const email = "test@mail.ru";
  const password = "pass";
  const phone = "+79999999999";

  it("should create, get, put and delete user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user/", {
      id,
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        message: "789",
        type: "unknown",
      });
    });

    cy.request(`https://petstore.swagger.io/v2/user/${username}`).then(
      (response) => {
        expect(response.status).be.eql(200);
        expect(response.body).be.eqls({
          id: 789,
          username: "username1",
          firstName: "firstName1",
          lastName: "lastName1",
          email: "test@mail.ru",
          password: "pass",
          phone: "+79999999999",
          userStatus: 0,
        });
      }
    );

    cy.request("PUT", `https://petstore.swagger.io/v2/user/${username}`, {
      id: 78,
      username: "Oleg",
      firstName: "Oleg",
      lastName: "Ivanov",
      email: "email@email.ru",
      password: "password12",
      phone: "phone",
      userStatus: 0,
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        message: "78",
        type: "unknown",
      });
    });

    cy.request(
      "DELETE",
      `https://petstore.swagger.io/v2/user/${username}`
    ).then((response) => {
      expect(response.status).be.eql(200);
    });
  });
});
