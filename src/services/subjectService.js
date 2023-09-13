const subjectRepository = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

const getSubjectsService = async () => {
  try {
    logger.info("getSubjectsService - Fetching subjects from the database"); 
    const subjects = await subjectRepository.getSubjects();
    logger.info("getSubjectsService - subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectsService - Error fetching subjects: ", error); // Agregar log en caso de error
    throw error;
  }
};

const getSubjectByIdService = async (id) => {
    try {
      logger.info("getSubjectByIdService - Fetching subject from the database"); 
      const subject = await subjectRepository.getSubjectById(id);
      logger.info("getSubjectByIdService - subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error(`getSubjectByIdService - Error fetching subject by id:${id}`, error); // Agregar log en caso de error
      throw error;
    }
  };

  const updateSubjectService = async (id, subject) => {
    try {
      logger.info("updateSubjectService - Updating subject from the database"); 
      const subjectUpdated = await subjectRepository.updateSubject(id, subject);
      logger.info("updateSubjectService - subject updated successfully!");
      return subjectUpdated;
    } catch (error) {
      logger.error("updateSubjectService - Error updated subject: ", error); // Agregar log en caso de error
      throw error;
    }
  };

  const deleteSubjectService = async (id) => {
    try {
      logger.info("deleteSubjectsService - DEleting subject from the database"); 
      const subject = await subjectRepository.deleteSubject(id);
      logger.info("deleteSubjectsService - subject deleted successfully!");
      return subject;
    } catch (error) {
      logger.error("deleteSubjectsService - Error deleting subject: ", error); // Agregar log en caso de error
      throw error;
    }
  };

  const createSubjectService = async (subject) => {
    try {
      logger.info("createSubjectsService - Creating subject from the database"); 
      const newsubject = await subjectRepository.createSubject(subject);
      logger.info("createSubjectsService - subject created successfully!");
      return newsubject;
    } catch (error) {
      logger.error("createSubjectsService - Error creating subject ", error); // Agregar log en caso de error
      throw error;
    }
  };
module.exports.getSubjectsService =  getSubjectsService;
module.exports.getSubjectByIdService =  getSubjectByIdService;
module.exports.createSubjectService =  createSubjectService;
module.exports.updateSubjectService =  updateSubjectService;
module.exports.deleteSubjectService =  deleteSubjectService;
