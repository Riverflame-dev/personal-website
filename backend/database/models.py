from mongoengine import Document, StringField, ListField

class Project(Document):
    title = StringField(required=True, unique=True)
    description = StringField(required=True)
    tech_list = ListField(StringField(required=False))
    link_list = ListField(StringField(required=False))
    