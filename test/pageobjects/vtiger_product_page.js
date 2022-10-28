class productPage{
get createProductIcon(){
    return $('//img[@alt="Create Product..."]')
}
async product(){
  await this.createProductIcon.click() 
}
}
module.exports=new productPage()