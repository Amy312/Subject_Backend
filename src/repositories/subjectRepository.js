const knex = require("knex");
const pgConnection = require("../config/knex-pg");
const db = knex(pgConnection.development);

const SUBJECT_TABLE = "subjects"

const getSubjects = async () => {
  try {
    const subjects = await db(SUBJECT_TABLE).select("*");
    const subjectsJson = subjects.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectsJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const getSubjectById = async (id) => {
    try {
      const subject = await db(SUBJECT_TABLE).select("*").where('id', id);
      const subjectJson = subject.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor,
      }));
      return subjectJson;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  const createSubject = async (subject) => {
    try {
      await db(SUBJECT_TABLE).select("*").insert(subject);
      const subjectResponse = await db(SUBJECT_TABLE).select("*");
      const subjectJson = subjectResponse.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor,
      }));
      return subjectJson;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  const updateSubject = async (id, subject) => {
    try {
      await db(SUBJECT_TABLE).select("*").where('id',id).update(subject);
      const subjectUpdated = await db(SUBJECT_TABLE).select("*");
      const subjectJson = subjectUpdated.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor,
      }));
      return subjectJson;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  const deleteSubject = async (id) => {
    try {
      await db(SUBJECT_TABLE).select("*").where("id", id).del();
      const subject = await db(SUBJECT_TABLE).select("*");
      const subjectJson = subject.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor,
      }));
      return subjectJson;
    } catch (e) {
      console.error(e);
      return e;
    }
  };
module.exports.getSubjects = getSubjects ;
module.exports.getSubjectById = getSubjectById ;
module.exports.createSubject = createSubject ;
module.exports.updateSubject = updateSubject ;
module.exports.deleteSubject = deleteSubject ;
