// get Types out of mongoose to use for ObjectId
const { Schema, model, Types } = require('mongoose');

// get util for formatting date
const formatTimeStamp = require('../utils/formatTimeStamp');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            // mannually create new object id
            default: function() { return new Types.ObjectId() }
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            // default value is current timestamp
            default: Date.now,
            // getter method to format the timestamp on query
            get: (time) => formatTimeStamp(time)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactionSchema;

// Reaction (SCHEMA ONLY)

// reactionId
    // Use Mongoose's ObjectId data type
    // Default value is set to a new ObjectId
// reactionBody
    // String
    // Required
    // 280 character maximum
// username
    // String
    // Required
// createdAt
    // Date
    // Set default value to the current timestamp
    // Use a getter method to format the timestamp on query

// Schema Settings:
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.