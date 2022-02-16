describe('Ecosia', function () {

    // test() and specify() is also available
    this.tags = ['ecosiabdd'];
    it('demo test', function (browser) {

        browser
            .url('https://www.ecosia.org/')
            .setValue('input[type=search]', 'nightwatch')
            .click('button[type=submit]')
            .assert.containsText('.mainline-results', 'Nightwatch.js')
            .end();
    });

});