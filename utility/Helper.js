import { uuid } from 'uuidv4';
import fs from 'fs';
import path from 'path';
const uuidRegex = /^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i;

const supportedTypes = {
    'image/jpeg': 'images',
    'image/png': 'images',
    'application/pdf': 'pdf',
    'application/msword': 'docs',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docs',
    'audio/mpeg': 'audio',
    'video/mp4': 'video'
};
const getFileType = (mimeType) => supportedTypes[mimeType] || null;

export default {
    uploadFile: async (req, res) => {
        try {
            const file = req.files.file;
            if (!file) {
                return res.status(400).send('No file uploaded');
            }
            const fileType = getFileType(file.mimetype);
            if (!fileType) {
                return res.status(400).send('Invalid file type');
            }
            const uploadDir = path.join(path.resolve(), '/public/uploads/', fileType);
            const isDirExist = fs.existsSync(uploadDir);
            console.log('uploade dir =========>', isDirExist, uploadDir);
            if (!isDirExist) fs.mkdirSync(uploadDir);
            const fileNameUnic = `${uuid()}-${file.name}`
            const fileBasePat = `/uploads/${fileType}/${fileNameUnic}`
            const filePath = path.join(uploadDir, fileNameUnic);
            await file.mv(filePath);
            return res.status(200).send({
                message: "file Uploade Successfully",
                file: fileBasePat
            });
        } catch (error) {
            return res.status(500).send({
                message: 'Internal server error',
                success: false,
                error: error.message
            });
        }
    }
}