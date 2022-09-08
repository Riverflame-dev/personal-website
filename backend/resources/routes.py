from .test import get_current_time

def initialize_routes(api):

    api.add_resource(get_current_time, '/api/time')