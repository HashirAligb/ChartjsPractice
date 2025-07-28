import sqlite3  

conn = sqlite3.connect('firms.db') 
cursor = conn.cursor() 

cursor.execute('''
    CREATE TABLE IF NOT EXISTS firms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        borough TEXT NOT NULL,
        contact TEXT NOT NULL,
        phone TEXT NOT NULL
    )
''')
sample_firms = [
    ("Legal Aid Society", "Brooklyn", "Sarah Johnson", "555-0123"),
    ("Community Legal", "Manhattan", "Mike Chen", "555-0456"), 
    ("Justice Partners", "Queens", "Lisa Rodriguez", "555-0789")
] 

cursor.executemany('INSERT INTO firms (name, borough, contact, phone) VALUES (?, ?, ?, ?)', sample_firms) 

conn.commit() 
conn.close() 

print("Database created successfully!") 
