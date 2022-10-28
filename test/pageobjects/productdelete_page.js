class productDelete{
    get deleteBtn(){
        return $('//input[@class="crmbutton small delete"]')
    }
async delete(){
    await this.productDelete.click()
}
}
module.exports=new productDelete()