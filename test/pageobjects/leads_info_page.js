class leadsInfoPage{
    get leadsText(){
        return $('//a[text()="Leads"]')
    }
    async leadsinfo(){
        await this.leadsText.click()
    }
}
module.exports=new leadsInfoPage()