class homePage{
    get productTab(){
        return $('//a[text()="Products"]')
    }
    get findDuplicateicon(){}
async home(){
   await this.productTab.click()
}
}
module.exports=new homePage()