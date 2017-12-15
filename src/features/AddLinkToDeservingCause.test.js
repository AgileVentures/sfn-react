import Nightmare from 'nightmare'
import {expect} from 'chai';

// can we automatically run test server for this to hit?

// const nightmare = Nightmare({
//   webPreferences: {
//     //preload: path.resolve("nightmare-startup-script.js")
//     preload: "./nightmare-startup-script.js"
//   }
// });

// can we avoid the c9 default page? ==> cookie thing works

describe('When visiting the homepage', () => {

  var originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  // const url = "https://mastering-phoenix-framework-federicoesparza.c9users.io:8081/";
  const url = "http://localhost:8081/";

  test('it sees the submitted link on the videos page', (done) => {
    const nightmare = Nightmare({ show: true });
    //nightmare.useragent('Headless')
    nightmare
     // .cookies.set({
     //   url: url,
     //   name: 'c9.live.user.click-through',
     //   value: 'ok',
     //   path: '/',
     //   secure: true,
     //   domain: '.mastering-phoenix-framework-federicoesparza.c9users.io',
     //   expires: '2187-08-16T13:12:47.580Z'
     // }) // locally this causes a [object Object] error
     .goto(url)
     // .click('a.solid.fat.info.button')
     // .wait('.App-title')
     .type("#yt_link", "http://real.yt.link")
     .click("input[name = 'Submit']")
     .wait(1000)
     .click("#videos_page_link")
     .evaluate(() =>
        document.body.textContent
        // document.querySelector('.App-title') # not working for some reason
     )     
     .end()
     .then((text) => {
       //console.log(text)
       expect(text).to.include('http://real.yt.link');
       done();
     })
     .catch((err) => {
       fail(err);
       done();
     });
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

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
})