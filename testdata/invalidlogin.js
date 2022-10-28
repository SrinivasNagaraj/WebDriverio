const fs=require('fs')
let cred=JSON.parse(fs.readFileSync("./test/specs/testdata/data.json"))
describe('login to app',async()=>{
    it('url',async()=>{
        await browser.url('http://rmgtestingserver:8888')
        await browser.maximizeWindow()
        await console.log(browser.getTitle())
        await expect(browser).toHaveUrlContaining('rmgtestingserver:8888')
    })

cred.forEach(({username,password}) => {
    it('invalidlogin',async()=>{
await browser.$('[name="user_name"]') .setValue(username)
await browser.$('[name="user_password"]').setValue(password)
await browser.$('[id="submitButton"]').click()
    })
})
    
})


