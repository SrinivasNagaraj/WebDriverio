const LoginApp=require('../pageobjects/vtiger_login_page.js')
const HomePage=require('../pageobjects/vtiger_home_page')
const FindDuplicatePage=require('../pageobjects/findduplicatePage')
const duplicatesProductPage=require('../pageobjects/duplicates_products_page')

describe('product',async()=>{
    it('login',async()=>{
        await browser.url('http://rmgtestingserver:8888/')
        await browser.maximizeWindow()
        await console.log(browser.getTitle());
        await expect(browser).toHaveUrlContaining('rmgtestingserver:8888')
await LoginApp.login('admin','admin')
console.log(await browser.getTitle());
await expect(browser).toHaveTitleContaining(' Home - vtiger CRM 5 - Commercial Open Source CRM')
// await productHomePage.home()


        // let usertextfield=await $('[name="user_name"]') 
        // let pwdtextfield=await $('[name="user_password"]')
        // let lgnbtn=await $('[id="submitButton"]')
        // await usertextfield.setValue('admin')
        // await pwdtextfield.setValue('admin')
        // await lgnbtn.click()
      //  await expect(browser).toHaveTitleContaining(' Home - vtiger CRM 5 - Commercial Open Source CRM')
        })
        it('click on products',async()=>{  
     await HomePage.home()
     console.log(await browser.getTitle());
            await expect(browser).toHaveTitleContaining('Administrator - Products - vtiger CRM 5 - Commercial Open Source CRM')
            

            // var producttab=await $('//a[text()="Products"]')
            // await producttab.click()
            // await expect(browser).toHaveTitleContaining('Administrator - Products - vtiger CRM 5 - Commercial Open Source CRM')
        })
it('find dupicates',async()=>{
await FindDuplicatePage.findDuplicates()
const mergingtext=await $('//span[text()="Merging Criteria Selection"]')
await expect(mergingtext).toBeDisplayed()



  //   const findduplicatesicon=await $('//img[@ title="Find Duplicates"]')
  //  await findduplicatesicon.click()



// var proName=await $('//option[@value="174"]')
// await proName.click()
// const rightnavigation=await $('[name="Button"]')
// await rightnavigation.click()
// const findduplicatebtn=await $('//input[@type="submit"]')
// await findduplicatebtn.click()
})
it('select and delete',async()=>{
  await duplicatesProductPage.select()
  // await duplicatesProductPage.cl
// var checkbox=await $('input[@type="checkbox" and@ value="13"]')
// await checkbox.click()
// const dltbtn=await $('//input[@class="crmbutton small delete"]')
// await dltbtn.click()
await browser.acceptAlert()
})
        })
