import time
from flask import Flask

# Create an application instance
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}