class productsHomePage{
get productList(){
    return $$('//table[@class="lvt small"]//tr//a[@title="Products"]')
}

}
module.exports=new productsHomePage()