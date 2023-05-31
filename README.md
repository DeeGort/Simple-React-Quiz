# Simple-React-Quiz

Simple-React-Quiz is a React-based quiz application that allows creating questions and handling answers. The answers are evaluated based on a 'solution' array.

## Usage

To use the quiz, follow these steps:

1. Install `npm install`
2. Run `npm run`
3. Create questions, answers and solutiuons for the quiz in the `data.js`. 
In real-world usage, you would likely receive this data through an API. 

## Components

The Simple-React-Quiz application consists of the following components:

- **App**: The app component where the data and the app meet.
- **Quiz**: The main component that controls the quiz and handles the display of questions.
- **Question**: A component representing a question, displaying the question and answer options.

## Data Structure

The quiz uses the following data structure:

```js
{
    "name": "Essentials",
    "quiz": {
        "title": "Essentials",
        "questions": [
            {
                "question": "Nemed?",
                "answers": [
                    "Hölgy",
                    "Úr"
                ],
                "select": 1,
                "description": ""
            },
            {
                "question": "Mit látsz, ha a tükörben nézel?",
                "answers": [
                    "A finom vonalak és az első ráncok már láthatók",
                    "A markáns vonalak és redők jól láthatók"
                ],
                "select": 1,
                "description": ""
            },
            {
                "question": "Hány éves vagy?",
                "answers": [
                    "40 évnél fiatalabb",
                    "40 évnél idősebb"
                ],
                "select": 1,
                "description": ""
            },
        ],
        "solutions": [
            {
                "solution": [
                    ["Hölgy"],
                    ["A finom vonalak és az első ráncok már láthatók"],
                    ["40 évnél fiatalabb"]
                ],
                "action": "Action 1"
            },
            {
                "solution": [
                    ["Hölgy"],
                    ["A finom vonalak és az első ráncok már láthatók"],
                    ["40 évnél idősebb"]
                ],
                "action": "Action 2"
            },
            {
                "solution": [
                    ["Hölgy"],
                    ["A markáns vonalak és redők jól láthatók"],
                    ["40 évnél fiatalabb"]
                ],
                "action": "Action 3"
            },
            {
                "solution": [
                    ["Hölgy"],
                    ["A markáns vonalak és redők jól láthatók"],
                    ["40 évnél idősebb"]
                ],
                "action": "Action 4"
            },
            {
                "solution": [
                    ["Úr"],
                    ["A finom vonalak és az első ráncok már láthatók"],
                    ["40 évnél fiatalabb"]
                ],
                "action": "Action 5"
            },
            {
                "solution": [
                    ["Úr"],
                    ["A finom vonalak és az első ráncok már láthatók"],
                    ["40 évnél idősebb"]
                ],
                "action": "Action 6"
            },
            {
                "solution": [
                    ["Úr"],
                    ["A markáns vonalak és redők jól láthatók"],
                    ["40 évnél fiatalabb"]
                ],
                "action": "Action 7"
            },
            {
                "solution": [
                    ["Úr"],
                    ["A markáns vonalak és redők jól láthatók"],
                    ["40 évnél idősebb"]
                ],
                "action": "Action 8"
            }
        ]
    }
}
```
The 'question' field contains the question.
The 'answers' field contains the answer options.
The 'solution' array contains the potential answers.
The 'action' is the data when a solution passed.
