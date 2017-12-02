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

  test('it welcomes the user', (done) => {
   const nightmare = Nightmare();
   nightmare.goto('http://mastering-phoenix-framework-federicoesparza.c9users.io:8081')
     .cookies.set({
       name: 'c9.live.user.click-through',
       value: 'ok',
       path: '/',
       secure: true,
       domain: '.mastering-phoenix-framework-federicoesparza.c9users.io'
     })
     .evaluate(() =>
        document.querySelector('.App-title').text
     )
     .end()
     .then((text) => {
       expect(text).to.equal('Welcome to Sing for Needs');
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

})