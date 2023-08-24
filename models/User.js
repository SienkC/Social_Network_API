const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // check for unique
            unique: true,
            // trim off whitespace
            trim: true
        },
        email: {
            type: String,
            required: true,
            // check for unique
            unique: true,
            // check for valid email using Regex
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        // Array of _id values referencing the Thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        // Array of _id values referencing the User model (self-reference)
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const User = model('user', userSchema);

module.exports = User;


// User:

// username
    // String
    // Unique
    // Required
    // Trimmed
// email
    // String
    // Required
    // Unique
    // Must match a valid email address (look into Mongoose's matching validation)
// thoughts
    // Array of _id values referencing the Thought model
// friends
    // Array of _id values referencing the User model (self-reference)

// Schema Settings:
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
