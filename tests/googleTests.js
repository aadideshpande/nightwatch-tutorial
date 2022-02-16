module.exports = {
    '@tags': ['google'],
    'Google advanced search': browser => {
        const mainQuery = 'Nightwatch js';
        const inputSelector = 'input[name="as_q"]';
        const dropDownButton = '#as_qdr_button';
        const inputSelector2 = 'input[name="as_qdr"]';
        const languageQuery = 'y';
        const submitButton = '.jfk-button[type="submit"]'
        browser
        .url('https://www.google.co.in/advanced_search')
        .setValue(inputSelector, mainQuery)
        .click(dropDownButton)
        .setValue('#as_qdr_input input[name="as_qdr"]', 'm')
        .pause(1 * 1000)
        // .click(dropDownButtonLanguage)
        // .setValue(dropDownButtonLanguage, 'm')
        // .pause(2 * 1000)
        // .setValue(inputSelector2, 'upto a week ago')
        .click(submitButton)
        .assert.urlContains('as_q=Nightwatch+js')
        .saveScreenshot('tests_output/google.png')



    }
}