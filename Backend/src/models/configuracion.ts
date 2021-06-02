import mongoose, { Schema, Document} from 'mongoose';

const ConfiguracionSchema = new Schema({
    notificaciones: {
        type: Boolean
    },
    privacidad: {
        type: Boolean
    },
    seguridad: {
        type: Boolean
    }
});

export interface IConf extends Document {
    notificaciones: boolean;
    privacidad: boolean;
    seguridad: boolean;
}

export default mongoose.model<IConf>('new-config', ConfiguracionSchema);