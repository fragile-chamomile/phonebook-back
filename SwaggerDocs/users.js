/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: String
 *           example: 62cc0f7fa9c8032807cb8cf6
 *           description: The auto-generated id of the user
 *         name:
 *           type: String
 *           minLength: 3
 *           maxLength: 30
 *           example: Camila Brown
 *           description: The user name
 *         email:
 *           type: String
 *           allow: com, net, ua
 *           example: brown.c@gmail.com
 *           description: The user email
 *         password:
 *           type: String
 *           minLength: 6
 *           example: example2022
 *           description: The user password
 */

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       description: Registration's object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user name
 *               email:
 *                 type: string
 *                 description: The user email
 *               password:
 *                 type: string
 *                 description: The user password
 *     responses:
 *       201:
 *         description: The user was successfully created.
 *       400:
 *         description: Missing some field.
 *       409:
 *         description: The user with this email already registered.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/verify/{verificationToken}:
 *   get:
 *     summary: Mail verification
 *     tags: [Users]
 *     parameters:
 *       - name: verificationToken
 *         required: true
 *         in: path
 *         description: Token issued to the current user.
 *     responses:
 *       200:
 *         description: Verification successful.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/verify:
 *   post:
 *     summary: Resending an email to a user with a verification link
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user email
 *     responses:
 *       200:
 *         description: Verification email sent.
 *       400:
 *         description: The user with this email already verify.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Log in the user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       description: Authentication object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user email
 *               password:
 *                 type: string
 *                 description: The user password
 *     responses:
 *       200:
 *         description: The user was successfully authorized.
 *       400:
 *         description: Missing some field.
 *       401:
 *         description: Email is wrong or not verify, or password is wrong.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/logout:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Log out the user
 *     tags: [Users]
 *     responses:
 *       204:
 *         description: The user was successfully log out.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/current:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get information about the current user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Information found.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/avatars:
 *   patch:
 *     security:
 *      - bearerAuth: []
 *     summary: Change the user's avatar
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The avatar changed.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/avatars:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     summary: Delete the user's avatar
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The avatar deleted.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */
