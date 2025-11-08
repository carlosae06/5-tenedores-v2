import * as Yup from 'yup';

export function initialValues() {
    return {
        email: '',
        password: '',
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email('El correo no tiene el formato correcto').required('El email es requerido'),
        password: Yup.string().required('La contraseña es requerido')
    })
}