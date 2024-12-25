from flask import Flask, jsonify
from recommendation.suggest_habits import generate_habit_suggestions

app = Flask(__name__)

@app.route('/generate-habit-suggestions', methods=['GET'])
def get_habit_suggestions():
    suggestions = generate_habit_suggestions()
    return jsonify(suggestions)

if __name__ == '__main__':
    app.run(debug=True)