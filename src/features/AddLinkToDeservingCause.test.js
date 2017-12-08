import Nightmare from 'nightmare'
import {expect} from 'chai';

// const nightmare = Nightmare({
//   webPreferences: {
//     //preload: path.resolve("nightmare-startup-script.js")
//     preload: "./nightmare-startup-script.js"
//   }
// });



// can we automatically run test server for this to hit 
// can we avoid the c9 default page

describe('When visiting the homepage', () => {

  // beforeEach(function() {
  //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  // });

  test('it welcomes the user', (done) => {
   const nightmare = Nightmare();
   //nightmare.useragent('Headless')
   nightmare.cookies.set({
       url: 'https://mastering-phoenix-framework-federicoesparza.c9users.io:8081/',
       name: 'c9.live.user.click-through',
       value: 'ok',
       path: '/',
       secure: true,
       domain: '.mastering-phoenix-framework-federicoesparza.c9users.io',
       expires: '2187-08-16T13:12:47.580Z'
     })
     .goto('https://mastering-phoenix-framework-federicoesparza.c9users.io:8081')
    //  .click('a.solid.fat.info.button')
    //  .wait('.App-title')
     // .type("#yt_link", "http://yt.link")
     // .click("input[name = 'Submit']")
     // .wait(1000)
     .click("#videos_page_link")
     //.wait(1000)
     // .goto('https://mastering-phoenix-framework-federicoesparza.c9users.io:8081/videos')
     .evaluate(() =>
        document.body.textContent
        // document.querySelector('.App-title') # not working for some reason
     )     
     .end()
     .then((text) => {
       expect(text).to.include('http://yt.link');
       done();
     })
     .catch(done);
    // console.log('we are looking for some text')
    
    // let text = await page.evaluate(() => document.body.textContent)
    //                      .end()
    // console.log('we found some text')
    // console.log(text)

    // expect(text).toContain('Welcome to Sing for Needs')
    
    // nightmare.click('a.solid.fat.info.button')
    //          .wait('.App-title')
             // .evaluate(() =>
             //   document.querySelector('.App-title').text
             // )
             // .end()
             // .then((text) => {
             //   expect(text).to.equal('Welcome to Sing for Needs');
             //   done();
             // })
  })

})