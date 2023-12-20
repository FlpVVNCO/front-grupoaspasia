import { Formik, Field, Form, ErrorMessage } from "formik";

const FormBook = () => {
  return (
    <Formik
      initialValues={{ title: "", author: "", genre: "", date: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="flex flex-col items-center justify-center gap-5 h-[80vh]">
        <h1 className="text-4xl text-white mb-5">Insert a new book</h1>
        <Field
          className="sm:w-2/5 p-2 rounded-lg focus:outline-none focus:bg-secondary focus:text-white "
          type="text"
          name="title"
          required
          placeholder="Titulo"
        />
        <ErrorMessage
          name="title"
          component="div"
          required
          className="bg-red-500 text-white px-10 py-3 rounded-lg"
        />
        <Field
          className="sm:w-2/5 p-2 rounded-lg focus:outline-none focus:bg-secondary focus:text-white "
          type="text"
          name="author"
          required
          placeholder="Autor"
        />
        <Field
          className="sm:w-2/5 p-2 rounded-lg focus:outline-none focus:bg-secondary focus:text-white "
          type="text"
          name="genre"
          required
          placeholder="Género"
        />
        <Field
          className="sm:w-2/5 p-2 rounded-lg focus:outline-none focus:bg-secondary focus:text-white "
          type="date"
          name="date"
          required
          placeholder="Fecha publicación"
        />

        <button className="bg-secondary px-10 py-3 rounded-lg text-white hover:bg-secondary/90 transition-all">
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default FormBook;
