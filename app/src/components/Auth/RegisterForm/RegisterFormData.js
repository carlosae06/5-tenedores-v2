import * as Yup from 'yup';

const msgRequired = 'Este campo es requerido.';
export function initialValues() {
    return {
        email: '',
        password: '',
        confirmPassword: '',
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email('El correo no tiene el formato correcto.').required(msgRequired),
        password: Yup.string().required(msgRequired),
        confirmPassword: Yup.string().required(msgRequired).oneOf([Yup.ref('password')], 'Las contraseñas tienen que ser iguales'),
    });
}