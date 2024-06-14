const Anthropic = require('@anthropic-ai/sdk');
const Question = require('../models/Question');

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // Ensure this environment variable is set
});

exports.askQuestion = async (req, res) => {
    try {
        console.log('i');
        const { content } = req.body;

        // Make the API call to Anthropic
        const response = await anthropic.messages.create({
            model: "claude-3-opus-20240229",
            max_tokens: 1024,
            messages: [{ role: "user", content }],
        });
        console.log(response);

        const answer = response.content[0].text;

        // Save the question and answer to the database
        const question = new Question({ user_id: req.user.userId, content, answer });
        await question.save();

        res.status(201).json(question);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.questionId).populate('user_id');
        if (!question) return res.status(404).json({ message: 'Question not found' });

        res.json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserQuestions = async (req, res) => {
    try {
        const questions = await Question.find({ user_id: req.params.userId });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
