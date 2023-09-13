const { getSubjectByIdService, getSubjectsService, updateSubjectService, createSubjectService, deleteSubjectService } = require('../services/subjectService');
const logger = require('../utils/logger');

const getSubjectsController = async (req, res) => {
    logger.info('getSubjectsController - Req', req);
    try {
        const subjects = await getSubjectsService();
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

const getSubjectByIdController = async (req, res) => {
    logger.info('getSubjectByIdController - Req', req);
    const { params } = req;
    const { id } = params;
    try {
        const subject = await getSubjectByIdService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

const postSubjectController = async (req, res) => {
    logger.info('postSubjectController - Req', req);
    const {body} = req;
    
    try {
        const subjects = await createSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'Subject created successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating subject',
            error: error.message
        })
    }
    
};

const putSubjectController = async (req, res) => {
    logger.info('putSubjectController - Req', req);
    const { params, body} = req;
    const {id} = params
    try {
        const subjects = await updateSubjectService(id, body);
        return res.status(200).json({
            success: true,
            message: 'Subject updated successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error updating subject',
            error: error.message
        })
    }
    
};

const deleteSubjectController = async (req, res) => {
    logger.info('deleteSubjectController - Req', req);
    const {params} = req;
    const {id} = params;
    try {
        const subjects = await deleteSubjectService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleted subject',
            error: error.message
        })
    }
    
};



module.exports.getSubjectsController = getSubjectsController;
module.exports.getSubjectByIdController = getSubjectByIdController;
module.exports.postSubjectController = postSubjectController;
module.exports.putSubjectController = putSubjectController;
module.exports.deleteSubjectController = deleteSubjectController;