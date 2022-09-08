import time
from flask import Flask
from flask_restful_swagger_2 import Api
from flask_cors import CORS
from database.db import db_init
from resources.routes import initialize_routes
# Create an application instance
app = Flask(__name__)

#configurations
app.config['MONGODB_SETTINGS'] = 'mongodb+srv://riverflame:rishi0413@my-website-database.cjvxr24.mongodb.net/?retryWrites=true&w=majority'

#initialize packages
api = Api(app)
cors = CORS()

#initializing database and routes
db_init(app)


initialize_routes(api)
