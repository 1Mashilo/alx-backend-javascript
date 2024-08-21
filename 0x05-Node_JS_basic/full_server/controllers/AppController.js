/**
 * Contains the miscellaneous route handlers.
 * @author Mashilo Kgaladi <https://github.com/1mashilo>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
