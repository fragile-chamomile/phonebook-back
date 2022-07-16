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
