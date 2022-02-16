
function navigateBrowser(browser) {
    browser
        .url('https://www.ecosia.org')
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]');
}

function clickSubmit(browser) {
    browser
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js')
        .pause(3 * 1000)
        .end();
}

module.exports = {
    '@tags': ['ecosia'],
    'navigate to ecosia': navigateBrowser,
    'click on Submit': clickSubmit,
    'Test': function (browser) {
        var ecosia = browser.page.ecosia();
        // console.log('ECOSIA: ', ecosia);
        ecosia.navigate()
            .waitForElementVisible('@searchBar') // 2nd input element
            .verify.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .click('@submit')
            .pause(3 * 1000)

        browser.end()
    }
}