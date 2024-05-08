from flask import Flask, request, abort
import json
from config import db
from bson import ObjectId


app = Flask(__name__)

@app.get('/')
def home():
    return "This is an API. You shouldn't be here."

def fix_id(record):
    record["_id"] = str(record["_id"])
    return record

@app.get('/api/products')
def get_products():
    catalog = []
    cursor = db.products.find({})
    for record in cursor:
        catalog.append(fix_id(record))
    
    print(catalog)
    return json.dumps(catalog)

@app.get('/api/categories')
def get_categories():
    cats = []
    cursor = db.products.find({})
    for product in cursor:
        if "category" in product:
            category = product["category"]
            if category not in cats:
                cats.append(category)

    return json.dumps(cats)

@app.get('/api/reports/total')
def total_report():
    total = 0
    cursor = db.products.find({})
    for product in cursor:
        total += product.get("price",0)
        
    return json.dumps(total)

@app.post("/api/products")
def save_products():
    prod = request.get_json()
    db.products.insert_one(prod)
    return json.dumps(fix_id(prod))

@app.put("/api/products/<int:index>")
def update_products(index):
    updated_product = request.get_json()
    if 0<= index < len(products):
        products[index] = updated_product
        return json.dumps(updated_product)
    else:
        return "That index does not exist"

@app.delete("/api/products/<id>")
def delete_products(id):
    if not ObjectId.is_valid(id):
        return abort(400, "Invalid id")
    
    db_id = ObjectId(id)
    result = db.products.delete_one({"_id": db_id})
    if result.deleted_count == 0:
        return abort(404, "No product found for the provided id")
        
    return json.dumps({"deleted": True})

@app.get('/api/coupons')
def get_coupons():
    coupons = []
    cursor = db.coupons.find({})
    for cp in cursor:
        coupons.append(fix_id(cp))
        
    return json.dumps(coupons)

@app.post('/api/coupons')
def save_coupon():
    coupon = request.get_json()
    db.coupons.insert_one(coupon)
    return json.dumps(fix_id(coupon))

@app.get('/api/coupons/<code>')
def get_coupon(code):
    coupon = db.coupons.find_one({"code": code})
    if not coupon:
        return abort(404, "No coupon for given code")
    
    return json.dumps(fix_id(coupon))


@app.delete('/api/coupons/<id>')
def delete_coupons(id):
    if not ObjectId.is_valid(id):
        return abort(400, "Invalid id")
    
    db_id= Object_Id(id)
    result = db.coupons.delete_one({"_id": db_id})
    if result.deleted_count == 0:
        return abort(400, "No coupon found")
    
    return json.dumps({"deleted": True})

@app.patch("/api/products/<int:index>")
def patch_products(index):
    updated_field = request.get_json()
    if 0<= index < len(products):
        products(index).update(updated_field)
        return json.dumps(updated_field)
    else:
        return "That index does not exist"

#app.run(debug=True)