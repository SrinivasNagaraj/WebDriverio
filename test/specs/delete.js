const loginApp=require('../pageobjects/vtiger_login_page')
const HomePage=require('../pageobjects/vtiger_home_page')
const ProductPage=require('../pageobjects/vtiger_product_page')
const createProductPage=require('../pageobjects/vtiger_createnewproduct_page')
const productInfoPage=require('../pageobjects/vtiger_productinfo_page')
const productDeletePage=require('../pageobjects/productdelete_page')
const productsHomePage=require('../pageobjects/products_home_page')
describe('product',async()=>{
    it('login',async()=>{
       await  browser.url('http://rmgtestingserver:8888/')
       await browser.maximizeWindow()
       await console.log(browser.getTitle());
await expect(browser).toHaveUrlContaining('rmgtestingserver:8888')
await loginApp.login('admin','admin')
await HomePage.home()
await ProductPage.product()
await createProductPage.createproduct('tata','act-1234','2')
await productInfoPage.productinfo()
await productDeletePage.deleteBtn.click()
// let usertextfield=await $('[name="user_name"]')
// let pwdtextfield=await $('[name="user_password"]')
// let lgnbtn=await $('[id="submitButton"]')
// await usertextfield.setValue('admin')
// await pwdtextfield.setValue('admin')
// await lgnbtn.click()
// await expect(browser).toHaveTitleContaining(' Home - vtiger CRM 5 - Commercial Open Source CRM')
// })
// it('click on products tab',async()=>{
//     var producttab=await $('//a[text()="Products"]')
//     await producttab.click()
//     await expect(browser).toHaveTitleContaining('Administrator - Products - vtiger CRM 5 - Commercial Open Source CRM')
//     var createproicon=await $('//img[@alt="Create Product..."]').click()
// })
// it('enter product details and save',async()=>{
//     const productname="airtel"
//     const randomNumber=Math.random()*1000
//     const actualRandomNumber=Math.ceil(randomNumber)
//     const actualProName=productname+actualRandomNumber
//     var productnametext=await $('//input[@name="productname"]')
//     await productnametext.addValue(actualProName)
//     var partnumtext=await $('[id="productcode"]')
//     await partnumtext.addValue('air-1234')
//     var savebtn=await $('//input[@title="Save [Alt+S]"]')
//     await savebtn.click()
    // var deletebtn=await $('//input[@class="crmbutton small delete"]')
    // await deletebtn.click()
    await browser.acceptAlert()
    //const productlistelements=await productsHomePage.productList  
     var count=0
     await browser.pause(5000)
     const productlistelements=await productsHomePage.productList  
//let productlist=await browser.$$('//table[@class="lvt small"]//tr//a[@title="Products"]')
for (let index = 0; index <  productlistelements.length; index++) {
    var value=await  productlistelements[index].getText()
    if (await value==('tata')) {
        await count++
        break
    }
}
console.log(count);
if(await count==0){
    await  console.log("product deleted succesfully");
}
})
})


















//it('validate',async()=>{
//     var count=0
// for (let index = 0; index < 10; index++) {
//     let productlist=await browser.$$('//table[@class="lvt small"]//tr//a[@title="Products"]')[index].getText()
//     if (productlist==(actualProName)) {
//         count++
//     }
// }
 //if(await count==0){
  //await  console.log("product deleted succesfully");
// }
// })
//})
//})
    

