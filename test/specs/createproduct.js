const LoginApp=require('../pageobjects/vtiger_login_page.js')
const HomePage=require('../pageobjects/vtiger_home_page')
const ProductPage=require('../pageobjects/vtiger_product_page')
const createProductPage=require('../pageobjects/vtiger_createnewproduct_page')
const productInfoPage=require('../pageobjects/vtiger_productinfo_page')
const productsHomePage=require('../pageobjects/products_home_page')

// const fs=require('fs')
// let cred=JSON.parse(fs.readFileSync('./test/specs/testdata/data.json'))

describe('product',async()=>{
   
it('create product',async()=>{

await browser.url('http://rmgtestingserver:8888/')
await browser.maximizeWindow()
await console.log(browser.getTitle());
await expect(browser).toHaveUrlContaining('rmgtestingserver:8888')
await LoginApp.login('admin','admin')
await HomePage.home()
await ProductPage.product()
await createProductPage.createproduct('act','act-1234','2')
await productInfoPage.productinfo()
//productsHomePage.productList()

// let usertextfield=await $('[name="user_name"]') 
// let pwdtextfield=await $('[name="user_password"]')
// let lgnbtn=await $('[id="submitButton"]')
// await usertextfield.setValue('admin')
// await pwdtextfield.setValue('admin')
// await lgnbtn.click()
//await expect(browser).toHaveTitleContaining(' Home - vtiger CRM 5 - Commercial Open Source CRM')
//})
// it('click on products',async()=>{
// var producttab=await $('//a[text()="Products"]')
// await producttab.click()
// await expect(browser).toHaveTitleContaining('Administrator - Products - vtiger CRM 5 - Commercial Open Source CRM')
// var createproicon=await $('//img[@alt="Create Product..."]').click()
// //    })
 //it('enter product details',async()=>{
//       const productname="act"
//       const randomNumber=Math.random()*1000
//       const actualRandomNumber=Math.ceil(randomNumber)
//       const actualProName=productname+actualRandomNumber
// var productnametext=await $('//input[@name="productname"]')
// await productnametext.addValue(actualProName)
// var partnumtext=await $('[id="productcode"]')
// await partnumtext.addValue('act-1234')
// var categorydropdown=await $('[name="productcategory"]')
// await categorydropdown.selectByIndex(2)
// var savebtn=await $('//input[@title="Save [Alt+S]"]')
// await savebtn.click()
//  const productinfotext=await $('//span[@class="small"]')
//  await expect(productinfotext).toBeDisplayed()
// var productstext=await $('//a[text()="Products"]')
// await productstext.click()
const productlistelements=await productsHomePage.productList   
   for (let index = 0; index < productlistelements.length; index++) {
      const text=await productlistelements[index].getText()
      await console.log(productlistelements);
      if (text==("act")) {
        await  console.log("product created succesfully");
      break
      }   
   }
})
  })

