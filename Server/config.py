import pymongo
import certifi

con_str="mongodb+srv://ljaybarr:Likliklik_1@107-ch46.fsopi1u.mongodb.net/?retryWrites=true&w=majority&appName=107-ch46"

client = pymongo.MongoClient(con_str, tlsCAfile=certifi.where())
db = client.get_database("107-ch46")