from flask import Flask, jsonify, request
from flask_cors import CORS 
import sqlite3 

app = Flask(__name__)
CORS(app)   
 

def get_db_connection(): 
    conn = sqlite3.connect('firms.db') 
    return conn 


@app.route('/api/firms')
def get_firms():
    conn = get_db_connection()
    conn.row_factory = sqlite3.Row  # This is CRITICAL!
    firms = conn.execute('SELECT * FROM firms').fetchall()
    conn.close()
    
    return jsonify([dict(firm) for firm in firms])

@app.route('/api/firms', methods=['POST'])
def add_firm():
    data = request.get_json()
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        'INSERT INTO firms (name, borough, contact, phone) VALUES (?, ?, ?, ?)',
        (data['name'], data['borough'], data['contact'], data['phone'])
    )
    conn.commit()
    conn.close()
    
    return jsonify({'success': True, 'message': 'Firm added successfully!'})

if __name__ == '__main__':
    app.run(debug=True, port=5001)  