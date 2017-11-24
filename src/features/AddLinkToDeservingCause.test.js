// import Nightmare from 'nightmare';
// import {expect} from 'chai';

// describe('test duckduckgo search results', () => {
//   it('should find the nightmare github link first', (done) => {
//     const nightmare = Nightmare()
//     nightmare
//       .goto('https://duckduckgo.com')
//       .type('#search_form_input_homepage', 'github nightmare')
//       .click('#search_button_homepage')
//       .wait('#zero_click_wrapper .c-info__title a')
//       .evaluate(() =>
//         document.querySelector('#zero_click_wrapper .c-info__title a').href
//       )
//       .end()
//       .then((link) => {
//         expect(link).to.equal('https://github.com/segmentio/nightmare');
//         done();
//       })
//   });
// });






import nightmare from 'nightmare'

describe('When visiting the homepage', function () {

  test('it welcomes the user', async function () {
   // let page = nightmare().goto('https://www.agileventures.org')
    let page = nightmare().goto('https://mastering-phoenix-framework-federicoesparza.c9users.io')
    console.log('we are looking for some text')
    let text = await page.evaluate(() => document.body.textContent)
                         .end()
    // console.log('we found some text')
    // console.log(text)
    //expect(text).toContain('Code')
    expect(text).toContain('Welcome to the Cloud9')
  })

})