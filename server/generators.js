const faker = require('faker');
const numRecords = 6;

module.exports = {
  genAudio() {
    let audio = [];
    for (let i = 0; i < numRecords; i++) {
      let tempObj = {};
      tempObj['id'] = i+1;
      tempObj['title'] = faker.lorem.words();
      tempObj['date'] = faker.date.recent();
      tempObj['summary'] = faker.lorem.sentence();
      tempObj['speaker'] = faker.lorem.word();
      audio.push(tempObj);
    }
    return audio;
  },

  genNotice() {
    let notice = [];
    var slide = ['slide'];
    for (let i = 0; i < numRecords; i++) {
      let rand = Math.floor(Math.random() * 10) > 5 ? 1 : 0;
      let tempObj = {};
      tempObj['id'] = i+1;
      tempObj['title'] = faker.lorem.words();
      tempObj['image'] = `https://placeimg.com/720/576/any`;
      // tempObj['image'] = faker.random.image();
      tempObj['category'] = faker.random.arrayElement(["news","need","event"]);
      tempObj['date'] = faker.date.recent();
      tempObj['body'] = faker.lorem.paragraph();
      tempObj['tags'] = [faker.lorem.word(),faker.lorem.word(),faker.lorem.word(),slide[rand]];
      notice.push(tempObj);
    }
    return notice;
  },

  genMinistry() {
    let ministry = [];
    for (let i = 0; i < numRecords; i++) {
      let tempObj = {};
      tempObj['id'] = i+1;
      tempObj['title'] = faker.lorem.words();
      // tempObj['image'] = `http://via.placeholder.com/2160x800/${col}`;
      tempObj['image'] = faker.random.image();
      tempObj['body'] = faker.lorem.paragraph();
      ministry.push(tempObj);
    }
    return ministry;
  }
};
