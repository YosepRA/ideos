require('dotenv').config();

const { argv } = require('node:process');

const { faker } = require('@faker-js/faker');

const mongoConnect = require('./mongo-connect.js');
const Idea = require('./models/idea.js');
const User = require('./models/user.js');
const { promiseResolver } = require('../utilities/helpers.js');

const { MONGO_URL } = process.env;

const mongoUrl = MONGO_URL || 'mongodb://localhost:27017/ideos';
const amountArg = !Number.isNaN(parseInt(argv[2], 10))
  ? parseInt(argv[2], 10)
  : 10;
const userIdArg = argv[3] || '6329a7c780ca182f78c241c1';

/* ======================= MongoDB Connection ======================= */

const dbConnection = mongoConnect(mongoUrl);

/* ======================= Functions ======================= */

async function deleteAll(userId) {
  // Delete ideas.
  const [_, ideaDeleteError] = await promiseResolver(Idea.deleteMany({}));

  if (ideaDeleteError) {
    console.error('deleteAll: Idea delete all error.', ideaDeleteError.message);

    return undefined;
  }

  console.log('Ideas reset successful.');

  // Delete test user's ideas list.
  const [testUser, userGetError] = await promiseResolver(User.findById(userId));

  if (userGetError) {
    console.error('deleteAll: User get error.', userGetError.message);

    return undefined;
  }

  testUser.ideas = [];
  await testUser.save();

  console.log('Test user ideas list reset successful.');

  return undefined;
}

async function generateIdea(amount, userId) {
  const testUser = await User.findById(userId);

  // Generate idea.
  const ideas = [];

  for (let n = 0; n < amount; n += 1) {
    const titleLength = Math.floor(Math.random() * 3 + 1);
    const newIdeaTitle = faker.lorem.words(titleLength);
    // Only the first letter is capitalized.
    const capitalizedTitle = `${newIdeaTitle[0].toUpperCase()}${newIdeaTitle.slice(
      1,
    )}`;

    const newIdea = {
      title: capitalizedTitle,
      description: faker.lorem.sentences(),
      created: faker.date.recent(7),
      author: userId,
    };

    ideas.push(newIdea);
  }

  // Save ideas to database.
  const [createdIdeas, createError] = await promiseResolver(Idea.create(ideas));

  if (createError) {
    console.error(`Data create error: ${createError.message}`);

    return undefined;
  }

  // Save idea to test user.
  testUser.ideas = createdIdeas;
  await testUser.save();

  console.log(`Successfully generate ${createdIdeas.length} ideas.`);

  return undefined;
}

deleteAll(userIdArg)
  .then(() => generateIdea(amountArg, userIdArg))
  .then(() => {
    dbConnection.close();
  });
