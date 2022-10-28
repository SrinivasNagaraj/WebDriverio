class createNewProductPage{
    get productNameTextField(){
        return $('//input[@name="productname"]')
    }
    get partNumberTextFiled(){
        return $('[id="productcode"]')
    }
    get categoryDropDown(){
        return $('[name="productcategory"]')
    }
    get saveBtn(){
        return $('//input[@title="Save [Alt+S]"]')
    }
    async createproduct (productname,partnumber,dropdown) {
        await this.productNameTextField.setValue(productname);
        await this.partNumberTextFiled.setValue(partnumber);
        await this.categoryDropDown.selectByIndex(dropdown);
        await this.saveBtn.click();
    }
}
module.exports=new createNewProductPage()