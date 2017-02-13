# time out, check in
A web application about taking time for yourself.

## Getting Started

### Prerequisites
- MySQL
- Node.js

### Installing
To view the site as a user, you can view it on Heroku at <https://timeout-checkin.herokuapp.com>.
 
If you would like to run the application locally, please ensure that you have installed the prerequisites, then take the following steps:
- Clone this repository to your local machine with `git clone`.
- Install NPM dependencies by running `npm install` in the project directory.
- If you use a MySQL username other than `root` or have a MySQL password, open `config/config.js` and update these values.
- Create a database in MySQL called 'needs_db'.
- Ensure that you are in the root project directory, then run `npm start`.
- The application will be running at `localhost:3000/` and tables will be created in the database.
- Run `source insert_statements.sql` in the project directory to load data into your database.

## Built with
- Materialize (Front-end framework)
- Slick.js (Carousel plug-in)
- Chart.js (HTML5 charts)
- Express.js (Server framework)
- Handlebars (Templating engine)
- Heroku (Cloud platform)
- JawsDB (Heroku database add-on)
- MySQL (RDBMS)
- Node.js (Javascript environment)
- Sequelize (ORM)

## Authors
- Chris Brenner - [cbrenner04](https://github.com/cbrenner04)
- Mich Elliott - [mchlltt](https://github.com/mchlltt)
- Matt Tutak - [mtutak](https://github.com/mtutak)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
