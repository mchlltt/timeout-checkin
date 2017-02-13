# [time out, check in](https://timeout-checkin.herokuapp.com)
A web application about taking time for yourself.

![time out, check in front page](https://cloud.githubusercontent.com/assets/15218445/22895061/d125c290-f1e0-11e6-9173-fe3a42e2c91d.png)

## Features
- Interactive flowchart design leads you through self-reflection
- A variety of resources helps you find what you need in the moment
- Responsive design makes the application available and beautiful on both mobile and desktop
- Data visualization and statistics provide context and recommendations

## Getting Started
To view the site as a user, you can view it on Heroku at <https://timeout-checkin.herokuapp.com>.

### Installing
If you would like to run the application locally, please ensure that you have installed the both Node.js and MySQL, then take the following steps:
- Clone this repository to your local machine with `git clone http://github.com/mchlltt/need-finder.git`.
- Install NPM dependencies by running `npm install` in the project directory.
- If you use a MySQL username other than `root` or have a MySQL password, open `config/config.js` and update these values.
- Create a database in MySQL called 'needs_db'.
- Ensure that you are in the root project directory, then run `npm start`.
- The application will be running at `localhost:3000/` and tables will be created in the database.
- Run `source insert_statements.sql` in the project directory to load data into those tables.

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

## Acknowledgements
The authors of this project would like to thank Northwestern University Coding Boot Camp for direction and support in creating this product.
