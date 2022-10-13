describe('Simple App testing', () => {
  beforeEach(async () => {
    const app = await $('~app-root');
    await app.waitForDisplayed(10000, false);
  });

  it('Login test: valid case', async () => {
    const username = await $('~username');
    await username.setValue('codemagic');
    const password = await $('~password');
    await password.setValue('nevercode');

    const loginBtn = await $('~login');
    await loginBtn.click();

    await $('~loginstatus').waitForDisplayed(11000);
    const status = await $('~loginstatus').getText();
    expect(status).toHaveValueContaining('登录成功');
  });

  it('Login test: invalid case', async () => {
    await $('~username').setValue('nevercode');
    await $('~password').setValue('codemagic');

    await $('~login').click();

    await $('~loginstatus').waitForDisplayed(11000);
    const status = await $('~loginstatus').getText();
    expect(status).toHaveValueContaining('未登录');
  });
});
