const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Note = require("../models/Note");

// @desc get all users
// @route GET /users
// @access private

const getAllUsers = asyncHandler(async (req, res) => {});

// @desc create user
// @route POST /users
// @access private

const createNewUser = asyncHandler(async (req, res) => {});

// @desc update user
// @route PATCH /users
// @access private

const updateUser = asyncHandler(async (req, res) => {});

// @desc delete user
// @route DELETE /users
// @access private

const deleteUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
