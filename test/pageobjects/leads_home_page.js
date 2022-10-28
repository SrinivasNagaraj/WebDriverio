class leadsHomePage{
get clickLeadsTab(){
    return $('//a[text()="Leads"]')
}
async leads(){
    await this.clickLeadsTab.click()
}
}
module.exports=new leadsHomePage()