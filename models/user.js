import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})(a-zA-Z0-9._)+(?<![_.])$/, "Username is invalid; must be 8-20 characters long and contain only letters, numbers, and periods or underscores"],
        unique: [true, "Username already exists"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", UserSchema);

export default User;