from mongoengine import connect

def db_init(app):
    connect(host=app.config['MONGODB_SETTINGS'])