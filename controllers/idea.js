const Idea = require('../database/models/idea.js');
const { promiseResolver } = require('../utilities/helpers.js');

module.exports = {
  async index(req, res) {
    const { page: pageQuery } = req.query;

    // No query for now.
    const query = {};
    const page = pageQuery ? parseInt(pageQuery, 10) : 1;
    const limit = 10;
    const sort = '-created';

    // Final query.
    const [data, queryError] = await promiseResolver(
      Idea.paginate(query, { page, limit, sort }),
    );

    if (queryError) {
      const errorMessage = `Index query error: ${queryError.message}`;

      console.error(errorMessage);

      return res.status(500).send(errorMessage);
    }

    return res.json({
      page: data.page,
      totalPages: data.totalPages,
      length: data.docs.length,
      totalDocs: data.totalDocs,
      data: data.docs,
    });
  },
  async show(req, res) {
    const { id } = req.params;

    const [data, queryError] = await promiseResolver(Idea.findById(id));

    if (queryError) {
      const errorMessage = `Show query error: ${queryError.message}`;

      console.error(errorMessage);

      return res.status(500).send(errorMessage);
    }

    return res.json({ data });
  },
  async create(req, res) {
    const { user } = req;
    const { idea } = req.body;

    const newIdea = { ...idea, author: user };

    const [createdIdea, createError] = await promiseResolver(
      Idea.create(newIdea),
    );

    if (createError) {
      const errorMessage = `Create error: ${createError}`;

      console.error(errorMessage);

      return res.status(500).send(errorMessage);
    }

    // Save to user.
    user.ideas = user.ideas.concat(createdIdea);
    await user.save();

    return res.json({ status: 'ok', idea: createdIdea });
  },
  async update(req, res) {
    const { id } = req.params;
    const { idea } = req.body;

    const [_, updateError] = await promiseResolver(
      Idea.findByIdAndUpdate(id, idea),
    );

    if (updateError) {
      const errorMessage = `Update error: ${updateError}`;

      console.error(errorMessage);

      return res.status(500).send(errorMessage);
    }

    return res.json({ status: 'ok' });
  },
  async delete(req, res) {
    const { id } = req.params;

    const [_, deleteError] = await promiseResolver(Idea.findByIdAndDelete(id));

    if (deleteError) {
      const errorMessage = `Delete error: ${deleteError}`;

      console.error(errorMessage);

      return res.status(500).send(errorMessage);
    }

    return res.json({ status: 'ok' });
  },
};
