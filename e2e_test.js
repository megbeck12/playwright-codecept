const LoginPage = require("./pages/LoginPage")

Feature('Zero Bank Application - E2E Tests')

Before(({ I }) => {
    console.log('BEFORE HOOK')
    I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
    console.log('After HOOK')
})

Scenario('Login Test - Negative', ({ I, LoginPage }) => {
    I.amOnPage('http://zero.webappsecurity.com/index.html')
    I.click('#signin_button')
    I.seeElement('#login_form')

    LoginPage.submitLogin('invalid username', 'invalid paddword')
    LoginPage.assertLoginFormIsVisible()
    
    I.seeElement('.alert-error')
})