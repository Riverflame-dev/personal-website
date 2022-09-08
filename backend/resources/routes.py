from .test import get_current_time

from .projects import FetchProjectData

def initialize_routes(api):

    api.add_resource(get_current_time, '/api/time')
    api.add_resource(FetchProjectData, '/api/fetch-project-data')

