"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

@api.route('/token', methods=['POST'])
def generate_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        return jsonify({"msg": "Invalid username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id})

@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify({"id": user.id, "username": user.username, "address":user.address, "phone_number":user.phone }), 200

@api.route("/signup", methods=["POST"])
def create_user():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    address = request.json.get("address", None)
    email = request.json.get("email", None)
    phone_number = request.json.get("phone_number", None)

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"msg": "Username already exists, please use another username"}), 400
    
    existing_email = User.query.filter_by(username=username).first()
    if existing_email:
        return jsonify({"msg": "Email already been used, please use another email"}), 400
    
    new_user = User(username=username, password=password, address=address, phone=phone_number, email=email)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created successfully", "user_id": new_user.id}), 201