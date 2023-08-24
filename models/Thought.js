const { Schema, model } = require('mongoose');

// get reaction schema to use in thought schema
const reactionSchema = require('./Reaction');

// get util for formatting date
const formatTimeStamp = require('../utils/formatTimeStamp');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // Must be between 1 and 280 characters
            minlength: 1,
            maxlangth: 280
        },
        createdAt: {
            type: Date,
            // default value is current timestamp
            default: Date.now,
            // getter method to format the timestamp on query
            get: (time) => formatTimeStamp(time)
        },
        username: {
            type: String,
            required: true
        },
        // Array of nested documents created with the reactionSchema
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

// retrieves the length of the thought's reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// initialize thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;


// Thought:

// thoughtText
    // String
    // Required
    // Must be between 1 and 280 characters
// createdAt
    // Date
    // Set default value to the current timestamp
    // Use a getter method to format the timestamp on query
// username (The user that created this thought)
    // String
    // Required
// reactions (These are like replies)
    // Array of nested documents created with the reactionSchema

// Schema Settings:
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
