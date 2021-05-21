from pymongo import MongoClient
from bson.objectid import ObjectId

host = "mongodb+srv://admin:massmedia@cluster0.11ogg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
db_name = 'Booking'
db = MongoClient(host)[db_name]

def stringify_object_id(obj):
    if type(obj) is list:
        [stringify_object_id(o) for o in obj]
    elif type(obj) is dict:
        for k in obj:
            if type(obj[k]) is ObjectId:
                obj[k] = str(obj[k])
            else:
                stringify_object_id(obj[k])

def insertUser(details, driver=False):
    check_details = db.Users.find_one({'email': details['Email']})
    if driver:
        if check_details is None:
            return db.Users.insert_one({
                'firstName': details['FirstName'],
                'lastName': details['LastName'],
                'age': details['Age'],
                'gender': details['Gender'],
                'vType': details['vType'],
                'carname': details['carName'],
                'license': details['license'],
                'number': details['number'],
                'address': details['Address'],
                'type': details['type'],
                'email': details['Email'],
                'password': details['Password']
            })
        else:
            return db.Users.update_one(
                {
                    'email': details['Email']

                },
                {
                    "$set" : {
                        'firstName': details['FirstName'],
                        'lastName': details['LastName'],
                        'age': details['Age'],
                        'gender': details['Gender'],
                        'address': details['Address'],
                        'vType': details['vType'],
                        'carName': details['carName'],
                        'license': details['license'],
                        'number': details['number']
                    }
                }
            )
    else:
        if check_details is None:
            return db.Users.insert_one({
                'firstName': details['FirstName'],
                'lastName': details['LastName'],
                'age': details['Age'],
                'gender': details['Gender'],
                'address': details['Address'],
                'type': details['type'],
                'email': details['Email'],
                'password': details['Password']
            })
        else:
            return db.Users.update_one(
                {
                    'email': details['Email']

                },
                {
                    "$set": {
                        'firstName': details['FirstName'],
                        'lastName': details['LastName'],
                        'age': details['Age'],
                        'gender': details['Gender'],
                        'address': details['Address'],
                    }
                }
            )

def Login(details):
    response = dict(db.Users.find_one({'email': details['email']}))
    if response:
        if details['password'] == response['password']:
            return response['type']
        else:
            return "Wrong Password"
    else:
        return "No Such Email Exists"

def viewUsers():
    users = list(db.Users.find({}))
    stringify_object_id(users)
    if users:

        return users
    else:
        return None

def viewBookingsDetails():
    users = list(db.Planners.find({}))
    stringify_object_id(users)
    if users:

        return users
    else:
        return None

def viewUsersByID(id):
    users = dict(db.Users.find_one({'_id': ObjectId(id)}))
    stringify_object_id(users)
    if users:
        return users
    else:
        return None

def viewPlansByID(id):
    users = dict(db.Planners.find_one({'_id': ObjectId(id)}))
    stringify_object_id(users)
    if users:
        return users
    else:
        return None


def viewBookings(email):
    plans = list(db.Planners.find({'email': email}))
    stringify_object_id(plans)
    if plans:
        return plans
    else:
        return None

def viewDriverBookings(email):
    plans = list(db.Planners.find({'driverName': email}))
    stringify_object_id(plans)
    if plans:
        return plans
    else:
        return None



def updatePlanuser(details):
    return db.Users.update_one(
        {
            '_id': ObjectId(details['_id'])

        },
        {
            "$set": {
                'firstName': details['FirstName'],
                'lastName': details['LastName'],
                'age': details['Age'],
                'gender': details['Gender'],
                'address': details['Address'],
                'email': details['Email'],
                'password': details['Password']
            }
        }
    )

def updateDriverUser(details):
    db.Users.update_one(
        {
            '_id': ObjectId(details['_id'])

        },
        {
            "$set": {
                'firstName': details['FirstName'],
                'lastName': details['LastName'],
                'age': details['Age'],
                'gender': details['Gender'],
                'address': details['Address'],
                'vType': details['vType'],
                'carName': details['carName'],
                'license': details['license'],
                'number': details['number'],
                'email': details['Email'],
                'password': details['Password']
            }
        }
    )

def deletePlanUser(id):
    return db.Users.delete_one({
        '_id': ObjectId(id)
    })

def createPlan(details):
    return db.Planners.insert_one({
        'email': details['email'],
        'driverName': details['driver'],
        'client': details['client'],
        'fromAddress': details['fromAddress'],
        'toAddress': details['toAddress'],
        'date': details['date'],
        'time': details['time'],
        'message': details['message'],
        'accepted': False
    })

def updatePlan(details):
    return db.Planners.update_one(
        {
            '_id': ObjectId(details['_id'])
        },
        {
            "$set": {
                'accepted': details['accepted'],
                'clicked': details['clicked']
            }
        }
    )

def updatePlanDetails(details):
    return db.Planners.update_one(
        {
            '_id': ObjectId(details['_id'])
        },
        {
            "$set": {
                'driverName': details['driver'],
                'client': details['client'],
                'fromAddress': details['fromAddress'],
                'toAddress': details['toAddress'],
                'date': details['date'],
                'time': details['time'],
                'message': details['message']
            }
        }
    )

def deletePlan(details):
    return db.Planners.delete_one(
        {
            '_id': ObjectId(details['_id'])
        }
    )

def getPlansForDriver(name):
    plans = list(db.Planners.find({'driverName': name}))
    stringify_object_id(plans)
    if plans:
        return plans
    else:
        return None

def getPlans():
    plans = list(db.Planners.find({}))
    stringify_object_id(plans)
    if plans:
        return plans
    else:
        return None