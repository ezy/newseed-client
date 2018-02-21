const faker = require('faker');
const numRecords = 6;

module.exports = {
  genAudio() {
    let audio = [];
    for (let i = 0; i < numRecords; i++) {
      let tempObj = {};
      tempObj['id'] = i+1,
      tempObj['title'] = faker.lorem.words(),
      tempObj['date'] = faker.date.recent(),
      tempObj['summary'] = faker.lorem.sentence(),
      tempObj['tags'] = [faker.lorem.word(),faker.lorem.word(),faker.lorem.word()]
      audio.push(tempObj);
    }
    return audio;
  },

  genNotice() {
    let notice = [];
    for (let i = 0; i < numRecords; i++) {
      let tempObj = {};
      tempObj['id'] = i+1,
      tempObj['title'] = faker.lorem.words(),
      tempObj['category'] = faker.lorem.word(),
      tempObj['date'] = faker.date.recent(),
      tempObj['body'] = faker.lorem.paragraph(),
      tempObj['tags'] = [faker.lorem.word(),faker.lorem.word(),faker.lorem.word()]
      notice.push(tempObj);
    }
    return notice;
  }
};
