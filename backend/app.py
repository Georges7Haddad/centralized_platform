from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify(status='healthy')

@app.route('/dummy', methods=['GET'])
def dummy_data():
    return jsonify(data='This is some dummy data')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
