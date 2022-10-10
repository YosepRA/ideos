import { faker } from '@faker-js/faker';

faker.seed(100);

function generateIdea(amount) {
  const ideas = [];

  for (let n = 0; n < amount; n += 1) {
    const titleLength = Math.floor(Math.random() * 3 + 1);
    const newIdeaTitle = faker.lorem.words(titleLength);
    // Only the first letter is capitalized.
    const capitalizedTitle = `${newIdeaTitle[0].toUpperCase()}${newIdeaTitle.slice(
      1,
    )}`;

    const newIdea = {
      _id: n,
      title: capitalizedTitle,
      description: faker.lorem.sentences(),
      created: faker.date.recent(7),
    };

    ideas.push(newIdea);
  }

  return ideas;
}

function cls(input) {
  return input
    .replace(/\s+/gm, ' ')
    .split(' ')
    .filter((cond) => typeof cond === 'string')
    .join(' ')
    .trim();
}

async function promiseResolver(promise) {
  try {
    const data = await promise;

    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export { generateIdea, cls, promiseResolver };
