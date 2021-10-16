import { IncomingMessage, ServerResponse } from 'http';
import DB from '@database';
import enablePublicAccess from '@cors';

const allAvo = async (request: IncomingMessage, response: ServerResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(request, response);

    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({ length, data: allEntries }));
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    );
  }
};

export default allAvo;
