class productInfoPage{

get productsText(){
return $('//a[text()="Products"]')
}
async productinfo(){
    await this.productsText.click()
   
}
}
module.exports=new productInfoPage()