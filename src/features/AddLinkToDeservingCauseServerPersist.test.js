import Nightmare from 'nightmare'
import {expect} from 'chai';

describe('When visiting the homepage', () => {

  var originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  const url = "http://localhost:8081/";

  test('it sees the submitted link on the videos page even after hard refresh', (done) => {
    const nightmare = Nightmare({ show: true });
    //nightmare.useragent('Headless')
    nightmare
     .goto(url)
     .type("#yt_link", "http://real.yt.link")
     .click("input[name = 'Submit']")
     .wait(1000)
     .goto(url+'videos') // maybe this will no longer be an effective hard refresh if we use BrowserHistory
     .evaluate(() =>
        document.body.textContent
     )     
     .end()
     .then((text) => {
       expect(text).to.include('http://real.yt.link');
       done();
     })
     .catch((err) => {
       fail(err);
       done();
     });
  })

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
})