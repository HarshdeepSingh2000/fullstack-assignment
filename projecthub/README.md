# ProjectHub

## Setup Instructions

### Backend Setup
1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd projecthub


python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install -r requirements.txt


python manage.py migrate
python manage.py runserver

Create superuser 
python manage.py createsuperuser


Visit Links after  Setup

BE-links
http://localhost:8000/api/tasks/                         #POST CALL

http://localhost:8000/api/project/                        #POST CALL

http://localhost:8000/api/token/
http://localhost:8000/api/token/refresh/



FE-links

http://localhost:3000/tasks/                               #GET CALL

http://localhost:3000/projects/                               #GET CALL
