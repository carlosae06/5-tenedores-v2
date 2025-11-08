import * as Yup from 'yup';

export function initialValues() {
    return {
        name: '',
        address: '',
        description: '',
        phone: '',
        email: '',
        location: null,
        images: [],
    };
}

export function validationSchema() {
    return Yup.object(
        {
            name: Yup.string().required('Este campo es requerido.'),
            address: Yup.string().required('Este campo es requerido.'),
            phone: Yup.string().required('Este campo es requerido.'),
            email: Yup.string().email('El email no tiene el formato correcto.').required('Este campo es requerido.'),
            description: Yup.string().required('Este campo es requerido.'),
            location: Yup.object().required("La localizacion es requerida."),
            images: Yup.array().min(1, "Se requiere una imagen como minimo.").required("La imagen es reguerida.")
        }
    )
}