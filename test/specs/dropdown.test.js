
describe("drop down handling",function(){
 
 it.skip("select drop down value by text",function(){

        browser.url("https://www.facebook.com")
        const accountLink=$("//a[@id='u_0_2']")
        accountLink.click();
        $('#day').selectByVisibleText('10')
        $('#month').selectByVisibleText('Apr')
        $('#year').selectByVisibleText('1999')
        browser.pause(5000)
 });

 it.skip("select drop down value by index",function(){

   browser.url("https://www.facebook.com")
   $("//a[@id='u_0_2']").click();
   $('#day').selectByIndex(3)
   $('#month').selectByIndex(4)
   $('#year').selectByIndex(9)
   browser.pause(5000)
});

 it("get all the values from dropdown",function(){

    browser.url("https://www.facebook.com")
    $("//a[@id='u_0_2']").click();
    browser.pause(5000)
    let list = $$('#month option');
    console.log('length is',list.length)
    for(let i=0;i< list.length;i++){

       const element = list[i];
       console.log(i,element.getText());
       if(element.getText()==='May'){
          element.click();
          break;
       }

    }
    browser.pause(5000);   

 });

});