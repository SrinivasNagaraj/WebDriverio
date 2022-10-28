class leadsListPage{
    get leadslist(){
        return $$('//table[@class="lvt small"]//span[@vtfieldname="lastname"]/preceding-sibling::a')
    }
}
module.exports=new leadsListPage()