/* eslint-disable no-console */
/* eslint-disable implicit-arrow-linebreak */
const puppeteer = require('puppeteer');

const getDataFromPuppeteer = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://atomix.vg/');
    const titles = await page.evaluate(
      () =>
        document.getElementsByClassName('featured-image-narrow-title')[0].children[0].innerText,
    );
    console.log(titles);
    console.log('Puppeteer End');
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

getDataFromPuppeteer();
