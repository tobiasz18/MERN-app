import * as Yup from 'yup';

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

export const AddEventSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  desc: Yup.string()
    .min(200, 'Too Short!')
    .required('This field is required'),
  location: Yup.string()
    .min(2, 'Too Short!')
    .max(150, 'Too Long!')
    .required('This field is required'),  
  file: Yup
    .mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
});