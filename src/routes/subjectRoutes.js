const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/auth");
const {
  getSubjectsController,
  getSubjectByIdController,
  postSubjectController,
  putSubjectController,
  deleteSubjectController,
} = require("../controllers/subjectController");

/**
 * @swagger
 * /subjects:
 *   get:
 *     summary: Obtener una lista de materias
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */

/**
 * @swagger
 * /subjects/{nid}:
 *   get:
 *     summary: Obtener una materia por ID
 *     parameters:
 *      - in: id
 *        id: nid
 *        required: true
 *     schema:
 *        type: integer
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Obtener una lista de materias
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */

const SUBJECT_ROUTE = "/subjects";
// GET /subjects
router.get(SUBJECT_ROUTE, getSubjectsController);
// GET /subjects/{id}
router.get(`${SUBJECT_ROUTE}/:id`, getSubjectByIdController);

//POST /subjects
router.post(SUBJECT_ROUTE, postSubjectController);

//PUT /subjects/{id}
router.put(`${SUBJECT_ROUTE}/:id`, putSubjectController);

//DELETE /subjects/{id}:
router.delete(`${SUBJECT_ROUTE}/:id`, deleteSubjectController);

module.exports = router;
