const expectedchai=require('chai')

const LoginApp=require('../pageobjects/vtiger_login_page.js')
const leadsHomePage=require('../pageobjects/leads_home_page.js')
const createNewLeadsPage=require('../pageobjects/leads_createnewleadpage')
const leadsInfoPage=require('../pageobjects/leads_info_page')
const leadsListPage=require('../pageobjects/leads_list_page')
describe('leads',async()=>{
    it('login',async()=>{
await browser.url('http://rmgtestingserver:8888')
await browser.maximizeWindow()
await console.log(browser.getTitle());
//await expect(browser).toHaveUrlContaining('rmgtestingserver:8888')
await expectedchai.assert.equal('rmgtestingserver:8888','rmgtestingserver:8888')
await LoginApp.login('admin','admin')
await console.log(browser.getTitle());
await expect(browser).toHaveTitleContaining(' Home - vtiger CRM 5 - Commercial Open Source CRM')
await leadsHomePage.leads()
await  createNewLeadsPage.createnewlead('1','pedri','gonzalej','tyss')
await leadsInfoPage.leadsinfo()
// let usertext=await $('[name="user_name"]') 
// let pwdtext=await $('[name="user_password"]')
// let lgnbtn=await $('[id="submitButton"]')
// await usertext.setValue('admin')
// await pwdtext.setValue('admin')
// await lgnbtn.click()
//await expect(browser).toHaveTitleContaining(' Home - vtiger CRM 5 - Commercial Open Source CRM')
//     })
// it('leads tab and create leads',async()=>{
//     const leadstab=await $('//a[text()="Leads"]')
// await leadstab.click()
// await console.log(browser.getTitle());
// await expect(browser).toHaveTitleContaining('Leads')
// const leadsicon=await $('//img[@title="Create Lead..."]')
// await leadsicon.click()
// const createleadtext=await $('//span[text()="Creating New Lead"]')
// await expect(createleadtext).toBeDisplayed()
// })
// it('leads detais',async()=>{
//     const firstname="pedri"
//     const lastname="gonzalej"
//     const randomNumber=Math.random()*1000
//     const actualRandomNumber=Math.ceil(randomNumber)
//     const actualfirstName=firstname+actualRandomNumber
//     const actuallastName=lastname+actualRandomNumber
// const firstnamedrop=await $('[name="salutationtype"]')
// await firstnamedrop.selectByIndex(1)
// const firstnametext=await $('//input[@type="text" and@ name="firstname"]')
// await firstnametext.setValue(actualfirstName)
// const lastnametext=await $('//input[@type="text" and@ name="lastname"]')
// await lastnametext.setValue(actuallastName)
// const companytext=await $('//input[@type="text" and@ name="company"]')
// await companytext.setValue('tcs')
// const savebtn=await $('//input[@title="Save [Alt+S]"]')
// await savebtn.click()
// const leadstab=await $('//a[text()="Leads"]')
// await leadstab.click()
// const leadsList=
const leadslistElements=await leadsListPage.leadslist
for (let index = 0; index < leadslistElements.length; index++) {
   //var lastnamelist=await $$('//table[@class="lvt small"]//span[@vtfieldname="lastname"]/preceding-sibling::a')[index].getText()
   const text=await leadslistElements[index].getText()
    await console.log( leadslistElements);
    if (text==('gonzalej')) {
        await console.log("leads created succesfully");
        break
     }
    }
})
})