import "chromedriver"

import * as path from "path";
import * as assert from "assert";
import * as selenium from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

describe("widgetsjs", ()=>{
    const driver = new selenium.Builder().forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
    beforeEach((done)=>{
        console.log("file:///"+path.join(process.cwd(),"dist/index.html"))
        driver.get("http://localhost:1234/").then(()=>{
            done();
        })    
    })

    describe("#StatelessWidget", ()=>{
        let widget: selenium.WebElement;

        beforeEach((done)=>{
            driver.findElement(selenium.By.tagName("hello-world")).then(w => {
                widget = w;
                done()
            })
        })

        it("should have rendered", async()=>{
            const displayed = await widget.isDisplayed();
            assert.equal(displayed,true);
        })

        it("should have <h1>Hello World!!</h1> embedded within", async()=>{
            assert.deepEqual(await widget.getText(),"Hello World!!")
        })
    })

    describe("#StatefulWidget", ()=>{
        let widget: selenium.WebElement;

        beforeEach((done)=>{
            driver.findElement(selenium.By.tagName("increase-decrease")).then(w => {
                widget = w;
                done()
            })
        })

        it("should have rendered", async()=>{
            const displayed = await widget.isDisplayed();
            assert.equal(displayed,true);
        })

        it("should have p and button elements", async()=>{
            const btn1 = await widget.findElement(selenium.By.id("plus"))
            const btn2 = await widget.findElement(selenium.By.id("minus"))
            const p = await widget.findElement(selenium.By.id("num"))
            assert.deepEqual(await btn1.isDisplayed(),true)
            assert.deepEqual(await btn2.isDisplayed(),true)
            assert.deepEqual(await p.isDisplayed(),true)
        })

        it("should update state", async()=>{
            let btn1 = await widget.findElement(selenium.By.id("plus"))
            let btn2 = await widget.findElement(selenium.By.id("minus"))
            let p = await widget.findElement(selenium.By.id("num"))

            assert.equal(await p.getText(), "0");

            await btn1.click()
            
            // await timeout(100)

            btn1 = await widget.findElement(selenium.By.id("plus"))
            btn2 = await widget.findElement(selenium.By.id("minus"))
            p = await widget.findElement(selenium.By.id("num"))

            assert.equal(await p.getText(), "1");

            await btn2.click()
            // await timeout(100);

            // btn2 = await widget.findElement(selenium.By.id("minus"))
            await btn2.click()

            p = await widget.findElement(selenium.By.id("num"))

            assert.equal(await p.getText(), "-1");
        })

        it("should update peer component", async()=>{
            const btn2 = await widget.findElement(selenium.By.id("minus"))
            await btn2.click()
            const peerComp = await driver.findElement(selenium.By.tagName("peer-component"));
            assert.equal(await peerComp.getText(), "The number is -1");
        })
    })

    describe("#Diffing plugin", ()=>{
        let widget: selenium.WebElement;

        beforeEach((done)=>{
            driver.findElement(selenium.By.tagName("differ-component")).then(w => {
                widget = w;
                done()
            })
        })

        it("should initially have <h1>Hello World!</h1>", async()=>{
            const h1 = await widget.findElement(selenium.By.tagName("h1"))
            assert.deepEqual(await h1.getText(),"Hello World!")
        })

        it("should update only h1 when state changes",async()=>{
            const btn = await widget.findElement(selenium.By.id("btn"))
            const h1 = await widget.findElement(selenium.By.tagName("h1"))
            const input = await widget.findElement(selenium.By.id("input"))
            await input.sendKeys("W","I","D","G","E","T","S");
            await btn.click()
            assert.equal(await h1.getText(),"WIDGETS")
            assert.equal(await input.getAttribute("value"), "WIDGETS")
        })
    })

    describe("#children", ()=>{
        let widget: selenium.WebElement;

        beforeEach((done)=>{
            driver.findElement(selenium.By.tagName("child-widget")).then(w => {
                widget = w;
                done()
            })
        })

        it("should render children", async()=>{
            const innerText = await widget.getText()
            assert.equal(innerText, "Child is: Hey")
        })
    })

    after(async()=>{
        await driver.quit()
    })
})