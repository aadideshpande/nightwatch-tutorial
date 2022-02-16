const figmaLink = "https://www.figma.com/file/9PBld0T4xsKDV0ekkw4zvN/public-v1?node-id=0%3A1";
module.exports = {
    "link POCs #1 css selector": browser => {
        browser.url("http://localhost:3000/link")
        browser.pause(1 * 1000)

        const cssSelector = "#form > textarea";

        browser.useCss()
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector, figmaLink)
        browser.pause(1 * 1000)

        browser.end()

    },

    "link POCs #2 xpath selector": browser => {
        browser.url("http://localhost:3000/link")
        browser.pause(1 * 1000)

        const xpathSelector = '//*[@id="form"]/textarea';

        browser.useXpath()
        browser.setValue(xpathSelector, figmaLink)
        browser.pause(1 * 1000)

    },

    "submit Figma public link": async function (browser) {
        browser.url("http://localhost:3000/link")
        browser.pause(1 * 1000)

        browser.useCss()
        const cssSelector = "#form > textarea";
        browser.setValue(cssSelector, figmaLink)
        browser.pause(1 * 1000)

        const testResult = await browser.element(
            "css selector",
            "#form > input[type=submit]"
        )
        console.log(JSON.stringify(testResult, null, 4));
    }
}