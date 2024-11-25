describe("My first recorded video", () => {
  it("tests My first recorded video", async () => {
    await browser.setWindowSize(811, 633)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    // await browser.$("aria/This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.").click()
    // await browser.performActions([{
    //   type: 'key',
    //   id: 'keyboard',
    //   actions: [{ type: 'keyDown', value: '' }]
    // }])
    // await browser.performActions([{
    //   type: 'key',
    //   id: 'keyboard',
    //   actions: [{ type: 'keyUp', value: '' }]
    // }])
    // await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    // await browser.$("aria/This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.").click()
    // await browser.performActions([{
    //   type: 'key',
    //   id: 'keyboard',
    //   actions: [{ type: 'keyDown', value: '' }]
    // }])
    // await browser.performActions([{
    //   type: 'key',
    //   id: 'keyboard',
    //   actions: [{ type: 'keyUp', value: '' }]
    // }])
    // await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$('i').click()
    await browser.$("a > i").click()
  });
});
