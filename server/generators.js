const faker = require('faker');
const numRecords = 6;

module.exports = {
  genAudio() {
    let audio = [];
    for (let i = 0; i < numRecords; i++) {
      audio.push({
        "id":faker.random.alphaNumeric(),
        "title":faker.lorem.words(),
        "tags":[faker.lorem.word(),faker.lorem.word(),faker.lorem.word()]
      })
    }
    return audio;
  }
};
