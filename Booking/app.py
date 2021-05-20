from flask import Flask,request,jsonify
from db import *
from flask_cors import CORS

app = Flask(__name__)


app.config['SECRET_KEY'] = "bsajdknasjkbsandkldjksabfjksbfjkdsankjs"
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/user/signup', methods=['GET','POST'])
def signup():
    if request.method == "POST":
        signup = {}
        print(request.get_json())
        try:
            signup['vType'] = request.get_json(force=True)['vType']
            signup['carName'] = request.get_json(force=True)['carName']
            signup['license'] = request.get_json(force=True)['license']
            signup['number'] = request.get_json(force=True)['number']
        except:
            pass
        signup['FirstName'] = request.get_json(force=True)['fname']
        signup['LastName'] = request.get_json(force=True)['lname']
        signup['Gender'] = request.get_json(force=True)['gender']
        signup['Address'] = request.get_json(force=True)['address']
        signup['Age'] = request.get_json(force=True)['age']
        signup['Email'] = request.get_json(force=True)['email']
        signup['Password'] = request.get_json(force=True)['password']
        signup['type'] = request.get_json(force=True)['type']
        if signup['type'] == "driver":
            res = insertUser(signup, driver=True)
        else:
            res = insertUser(signup)
        return jsonify({'result': 'Success'})


@app.route('/login', methods=['GET','POST'])
def login():
    login = {}
    login['email'] = request.get_json(force=True)['email']
    login['password'] = request.get_json(force=True)['password']
    res = Login(login)
    if res == "Wrong Password":
        return jsonify({'result': 'Wrong Password'})
    elif res == "No Such Email Exists":
        return jsonify({'result': 'No Such Email Exists'})
    else:
        return jsonify({'result': res})

@app.route('/createPlan',methods=['GET','POST'])
def createPlans():
    plan = {}
    plan['email'] = request.get_json(force=True)['email']
    plan['driver'] = request.get_json(force=True)['driver']
    plan['client'] = request.get_json(force=True)['client']
    plan['fromAddress'] = request.get_json(force=True)['fromAddress']
    plan['toAddress'] = request.get_json(force=True)['toAddress']
    plan['date'] = request.get_json(force=True)['date']
    plan['time'] = request.get_json(force=True)['time']
    plan['message'] = request.get_json(force=True)['message']
    res = createPlan(plan)
    if res is not None:
        return jsonify({'result':'success'})
    else:
        return jsonify({'result': 'Failure'})

@app.route('/fetchBookings/<email>', methods=['GET'])
def getBookings(email):
    res = viewBookings(email)
    if res is not None:
        return jsonify({'result': res})
    else:
        return jsonify({'result': 'No Data'})

@app.route('/fetchDriverBookings/<email>', methods=['GET'])
def getDriverBookings(email):
    res = viewDriverBookings(email)
    if res is not None:
        return jsonify({'result': res})
    else:
        return jsonify({'result': 'No Data'})

@app.route('/updatePlan', methods=['POST'])
def updatePlans():
    details = {}
    details['_id'] = request.get_json(force=True)['id']
    details['accepted'] = request.get_json(force=True)['accepted']
    details['clicked'] = request.get_json(force=True)['clicked']
    res = updatePlan(details)
    if res is not None:
        return jsonify({'result': "success"})
    else:
        return jsonify({'result': 'No Data'})

@app.route('/fetchUsers', methods=['GET'])
def getUsers():
    res = viewUsers()
    if res is not None:
        return jsonify({'result': res})
    else:
        return jsonify({'result': 'No Data'})

@app.route('/fetchUsersByID/<id>', methods=['GET'])
def getUsersByID(id):
    res = viewUsersByID(id)
    if res is not None:
        return jsonify({'result': res})
    else:
        return jsonify({'result': 'No Data'})

@app.route('/fetchPlansByID/<id>', methods=['GET'])
def getPlansById(id):
    res = viewPlansByID(id)
    if res is not None:
        return jsonify({'result': res})
    else:
        return jsonify({'result': 'No Data'})


@app.route('/updateDriver', methods=['POST'])
def updateDriver():
    signup = {}
    signup["_id"] = request.get_json(force=True)['_id']
    signup['FirstName'] = request.get_json(force=True)['fname']
    signup['LastName'] = request.get_json(force=True)['lname']
    signup['Gender'] = request.get_json(force=True)['gender']
    signup['Address'] = request.get_json(force=True)['address']
    signup['Age'] = request.get_json(force=True)['age']
    signup['Email'] = request.get_json(force=True)['email']
    signup['Password'] = request.get_json(force=True)['password']
    signup['vType'] = request.get_json(force=True)['vType']
    signup['carName'] = request.get_json(force=True)['carName']
    signup['license'] = request.get_json(force=True)['license']
    signup['number'] = request.get_json(force=True)['number']
    res = updateDriverUser(signup)
    if res is not None:
        return jsonify({'result': 'success'})
    else:
        return jsonify({'result': 'failure'})

@app.route('/updatePlanner', methods=['POST'])
def updatePlanner():
    signup = {}
    signup["_id"] = request.get_json(force=True)['_id']
    signup['FirstName'] = request.get_json(force=True)['fname']
    signup['LastName'] = request.get_json(force=True)['lname']
    signup['Gender'] = request.get_json(force=True)['gender']
    signup['Address'] = request.get_json(force=True)['address']
    signup['Age'] = request.get_json(force=True)['age']
    signup['Email'] = request.get_json(force=True)['email']
    signup['Password'] = request.get_json(force=True)['password']
    res = updatePlanuser(signup)
    if res is not None:
        return jsonify({'result': 'success'})
    else:
        return jsonify({'result': 'failure'})

@app.route('/deleteUser', methods=['DELETE'])
def deleteUser():
    signup = {}
    signup['_id'] = request.get_json(force=True)['_id']
    res = deletePlanUser(signup['_id'])
    if res is not None:
        return jsonify({'result': 'Success'})
    else:
        return jsonify({'result': 'Failure'})

@app.route('/updatePlannerDetails', methods=['POST'])
def updatePlanDetailsData():
    plan = {}
    plan['_id'] = request.get_json(force=True)['_id']
    plan['driver'] = request.get_json(force=True)['driver']
    plan['client'] = request.get_json(force=True)['client']
    plan['fromAddress'] = request.get_json(force=True)['fromAddress']
    plan['toAddress'] = request.get_json(force=True)['toAddress']
    plan['date'] = request.get_json(force=True)['date']
    plan['time'] = request.get_json(force=True)['time']
    plan['message'] = request.get_json(force=True)['message']
    res = updatePlanDetails(plan)
    if res is not None:
        return jsonify({'result': 'Success'})
    else:
        return jsonify({'result': 'Failure'})


if __name__ == '__main__':
    app.run()
