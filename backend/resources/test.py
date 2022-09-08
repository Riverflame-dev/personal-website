import time
from flask_restful_swagger_2 import Resource

class get_current_time(Resource):

    def get(self):
        print("Hello")
        return {'time': time.time()}