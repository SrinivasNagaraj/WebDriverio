class duplicatesProductPage{
    get clickCheckbox(){
        return $('//input[@type="checkbox" and@ value="55"]')
    }
    get deleteBtn(){
        return $('//input[@class="crmbutton small delete"]')
    }
    async select(){
        await this.clickCheckbo.click()
        await this.deleteBtn.click()
    }
}
module.exports=new duplicatesProductPage()