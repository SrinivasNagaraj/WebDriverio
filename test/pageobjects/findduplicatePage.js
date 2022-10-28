class duplicates{
    get findDuplicatesIcon(){
        return $('//img[@ title="Find Duplicates"]')
    }
    get productNamedrop(){
        return $('//option[@value="174"]')
    }
    get rightNaviagtion(){
        return $('[name="Button"]')
    }
    get findDuplicateBtn(){
        return $('//input[@type="submit"]')
    }
    async findDuplicates(){
        await this.findDuplicatesIcon.click();
        await this.productNamedrop.click();
        await this.rightNaviagtion.click();
        await this.findDuplicateBtn.click();
    }
}
module.exports=new duplicates()