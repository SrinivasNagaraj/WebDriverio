class loginPage{

    get userTextField(){
        return $("[name='user_name']")
    }
    get passwordTextField(){
        return $("[name='user_password']")
    }

    get submitBtn(){
        return $("[id='submitButton']")
    }

    async login (username, password) {
        await this.userTextField.setValue(username);
        await this.passwordTextField.setValue(password);
        await this.submitBtn.click();
    }

    
}
module.exports=new loginPage()