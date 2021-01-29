const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends Page {
    /**
     * define selectors using getter methods
     */
   
    /*get pageHeader(){ return $('h1');}
    get subHeading() {return $('div.banner-text-content > p.sub-text');}

    get parent(){ return $('ul.l-nav-list.nav-main-menu');}
    get childElements(){ return this.parent.$$('li');}
    get freshWorkElements(){ return $$('div.footer-nav-title.footer-nav-title-logo');}
    get getTextForLi(){ return this.childElements.filter(element => {

          console.log(element.getText());

  
    });}

    get freshWorkElementsText(){

        return this.freshWorkElements.filter(element => {

            console.log(element.getText());

        });
    }
    //get supportLink(){ return $("//a[text()='Support']");}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    /* login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }*/

    /**
     * overwrite specifc options to adapt it to page object
     */
    /*open () {
        return super.open('login');
    }*/

    get mainHeader(){
         return $('h2.home_video__title');
        }

    get parent(){ return $('ul.list-nav-links'); }
    get childElements(){ return this.parent.$$('li');}
    get getTextForLi(){ return this.childElements.filter(element => {

        console.log(element.getText());
   
    });
    
   }
   get useCaseElements(){ return $$('div#main_b_footer_second_block>ul>li');}
   get useCaseElementsText(){ return this.useCaseElements.filter(element => {
           
        console.log(element.getText());

   });}

}

module.exports = new homePage();
