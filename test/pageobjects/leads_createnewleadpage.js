class createNewLeadPage{

    get createLeadIcon(){
        return $('//img[@title="Create Lead..."]')
    }
    get firstnamedrop(){
        return $('[name="salutationtype"]')
    }
    get firstnametextfield(){
        return $('//input[@type="text" and@ name="firstname"]')
    }
get lastnametextfiled(){
    return $('//input[@type="text" and@ name="lastname"]')
}
    get companytext(){
        return $('//input[@type="text" and@ name="company"]')
    }
    get savebtn(){
        return $('//input[@title="Save [Alt+S]"]')
    }
    async createnewlead(dropdown,firstname,lastname,companyname){
        await this.createLeadIcon.click();
        await this.firstnamedrop.selectByIndex(dropdown);
        await this.firstnametextfield.setValue(firstname);
        await this.lastnametextfiled.setValue(lastname);
        await this.companytext.setValue(companyname);
        await this.savebtn.click(); 
    }
}
module.exports=new createNewLeadPage()