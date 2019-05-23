import "chromedriver"

import * as path from "path";
import * as assert from "assert";
import * as selenium from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome"

function timeout(time: number): Promise<void>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res();
        }, time)
    })
}

describe("widgetsjs", ()=>{
    const driver = new selenium.Builder().forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
    beforeEach((done)=>{
        driver.get("file:///"+path.join(process.cwd(),"dist/index.html")).then(()=>{
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

            btn2 = await widget.findElement(selenium.By.id("minus"))
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

    after(async()=>{
        await driver.quit()
    })
})