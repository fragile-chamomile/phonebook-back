/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: The users managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - number
 *       properties:
 *         id:
 *           type: String
 *           example: 62cc0f7fa9c8032807cb8cf6
 *           description: The auto-generated id of the contact
 *         name:
 *           type: String
 *           minLength: 3
 *           maxLength: 30
 *           example: Sara Mainer
 *           description: The user name
 *         number:
 *           type: Number
 *           min: 7
 *           max: 13
 *           example: 761-23-96
 *           description: The user phone number
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get all user's contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Contacts found.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: This user's collection does not exist.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       description: Create object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - name
 *               - number
 *             properties:
 *               name:
 *                 type: string
 *                 description: The contact's name
 *               number:
 *                 type: string
 *                 description: The contact's number
 *     responses:
 *       201:
 *         description: The contact was successfully create.
 *       400:
 *         description: Missing some field or There is already a user with this name in the phonebook.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     summary: Get all user's contacts
 *     tags: [Contacts]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Contact ID.
 *     responses:
 *       200:
 *         description: The contact was successfully deleted.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: This user's collection does not exist.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /contacts/{id}:
 *   patch:
 *     security:
 *      - bearerAuth: []
 *     summary: Get all user's contacts
 *     tags: [Contacts]
 *     parameters:
 *       - name: id
 *         required: true
 *         in: path
 *         description: Contact ID.
 *     responses:
 *       200:
 *         description: The contact was successfully updated.
 *       400:
 *         description: Contact update failed.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: This user's collection does not exist.
 *       500:
 *         description: Some server error.
 */
