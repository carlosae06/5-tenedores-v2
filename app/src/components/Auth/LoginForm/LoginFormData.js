import * as Yup from 'yup';

const msgRequired = 'Este campo es requerido.';
export function initialValues() {
    return {
        email: '',
        password: '',
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email('El correo no tiene el formato correcto.').required(msgRequired),
        password: Yup.string().required(msgRequired),
    });
}