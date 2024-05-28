const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('./categories');
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists } = require('./games');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require('./users')

module.exports = {
    findAllCategories,
    findAllGames,
    findAllUsers,
    createCategory,
    createGame,
    createUser,
    findCategoryById,
    findGameById,
    findUserById,
    updateGame,
    updateCategory,
    updateUser,
    deleteGame,
    deleteUser,
    deleteCategory,
    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsCategoryExists,
    checkIsGameExists,
    checkEmptyName,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,
    checkIfCategoriesAvaliable
}