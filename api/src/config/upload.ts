import { diskStorage, StorageEngine } from 'multer';
import { randomBytes } from 'crypto';
import { resolve } from 'path';

const tempFolder = resolve(__dirname, '..', '..', 'temp');

interface IUploadConfig {
  driver: 's3' | 'disk';

  tempFolder: string;
  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tempFolder,
  uploadsFolder: resolve(tempFolder, 'uploads'),

  multer: {
    storage: diskStorage({
      destination: tempFolder,
      filename(req, file, callback) {
        const fileHash = randomBytes(10).toString('HEX');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },

  config: {
    disk: {},
    aws: {
      bucket: 'app-gobarber-2',
    },
  },
} as IUploadConfig;
