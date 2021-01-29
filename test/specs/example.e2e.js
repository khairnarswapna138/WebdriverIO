const homePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');

describe('homepage elements handles', () => {
    
    it('verify the homePage element',()=> {


        homePage.open();
       // let text = homePage.pageHeader.getText();
       // console.log(text);

       // console.log(homePage.subHeading.getText());

        homePage.getTextForLi;
        homePage.useCaseElementsText;
       // homePage.freshWorkElementsText;
        //homePage.supportLink.click();
       // browser.pause(5000);


    });

    it("main heading displayed?",function(){

        console.log("main heading is displyed=> ",homePage.mainHeader.isDisplayed());
    })

    it("main heading exiest?",function(){

        console.log("main heading exists=> ",homePage.mainHeader.isExisting());
    })
});
 


