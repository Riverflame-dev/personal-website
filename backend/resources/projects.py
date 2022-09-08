from database.models import Project

from flask_restful_swagger_2 import Resource

class FetchProjectData(Resource):

    def get(self):

        count = Project.objects.count()
        
        #for project in Project.objects
        
        return count

        